//     Zepto.js
//     (c) 2010-2016 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

export default function($) {
  let touch = Object.create(null);
  let touchTimeout;
  let tapTimeout;
  let swipeTimeout;
  let longTapTimeout;
  let longTapDelay = 750;
  let gesture;
  let down;
  let up;
  let move;
  let eventMap;
  let initialized = false;

  function swipeDirection(x1, x2, y1, y2) {
    return Math.abs(x1 - x2) >=
           Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down');
  }

  function longTap() {
    longTapTimeout = null;
    if (touch.last) {
      touch.el.trigger('longTap');
      touch = {};
    }
  }

  function cancelLongTap() {
    if (longTapTimeout) clearTimeout(longTapTimeout);
    longTapTimeout = null;
  }

  function cancelAll() {
    if (touchTimeout) clearTimeout(touchTimeout);
    if (tapTimeout) clearTimeout(tapTimeout);
    if (swipeTimeout) clearTimeout(swipeTimeout);
    if (longTapTimeout) clearTimeout(longTapTimeout);
    touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null;
    touch = {};
  }

  function isPrimaryTouch(event) {
    return (event.pointerType === 'touch' ||
            event.pointerType === event.MSPOINTER_TYPE_TOUCH)
           && event.isPrimary;
  }

  function isPointerEventType(e, type) {
    return (e.type === 'pointer' + type ||
            e.type.toLowerCase() === 'mspointer' + type);
  }

  // helper function for tests, so they check for different APIs
  function unregisterTouchEvents() {
    if (!initialized) return;
    $(document).off(eventMap.down, down)
               .off(eventMap.up, up)
               .off(eventMap.move, move)
               .off(eventMap.cancel, cancelAll);
    $(window).off('scroll', cancelAll);
    cancelAll();
    initialized = false;
  }

  function setup(__eventMap) {
    let now;
    let delta;
    let deltaX = 0;
    let deltaY = 0;
    let firstTouch;
    let _isPointerType;

    unregisterTouchEvents();

    eventMap = (__eventMap && ('down' in __eventMap)) ? __eventMap :
               ('ontouchstart' in document ?
                 {
                   down: 'touchstart',
                   up: 'touchend',
                   move: 'touchmove',
                   cancel: 'touchcancel'
                 } :
                'onpointerdown' in document ?
                  {
                    down: 'pointerdown',
                    up: 'pointerup',
                    move: 'pointermove',
                    cancel: 'pointercancel'
                  } :
                'onmspointerdown' in document ?
                  {
                    down: 'MSPointerDown',
                    up: 'MSPointerUp',
                    move: 'MSPointerMove',
                    cancel: 'MSPointerCancel'
                  } : false);

    // No API availables for touch events
    if (!eventMap) return;

    if ('MSGesture' in window) {
      gesture = new window.MSGesture();
      gesture.target = document.body;

      $(document)
      .bind('MSGestureEnd', function(e) {
        const swipeDirectionFromVelocity =
          e.velocityX > 1 ? 'Right' : e.velocityX < -1 ? 'Left' : e.velocityY > 1 ? 'Down' : e.velocityY < -1 ? 'Up' : null;
        if (swipeDirectionFromVelocity) {
          touch.el.trigger('swipe');
          touch.el.trigger('swipe' + swipeDirectionFromVelocity);
        }
      });
    }

    down = function(e) {
      if ((_isPointerType = isPointerEventType(e, 'down')) &&
          !isPrimaryTouch(e)) {
        return;
      }
      firstTouch = _isPointerType ? e : e.touches[0];
      if (e.touches && e.touches.length === 1 && touch.x2) {
        // Clear out touch movement data if we have it sticking around
        // This can occur if touchcancel doesn't fire due to preventDefault, etc.
        touch.x2 = undefined;
        touch.y2 = undefined;
      }
      now = Date.now();
      delta = now - (touch.last || now);
      touch.el = $('tagName' in firstTouch.target ?
                   firstTouch.target : firstTouch.target.parentNode);
      touchTimeout && clearTimeout(touchTimeout);
      touch.x1 = firstTouch.pageX;
      touch.y1 = firstTouch.pageY;
      if (delta > 0 && delta <= 250) touch.isDoubleTap = true;
      touch.last = now;
      longTapTimeout = setTimeout(longTap, longTapDelay);
      // adds the current touch contact for IE gesture recognition
      if (gesture && _isPointerType) gesture.addPointer(e.pointerId);
    };

    move = function(e) {
      if ((_isPointerType = isPointerEventType(e, 'move')) &&
          !isPrimaryTouch(e)) {
        return;
      }
      firstTouch = _isPointerType ? e : e.touches[0];
      cancelLongTap();
      touch.x2 = firstTouch.pageX;
      touch.y2 = firstTouch.pageY;

      deltaX += Math.abs(touch.x1 - touch.x2);
      deltaY += Math.abs(touch.y1 - touch.y2);
    };

    up = function(e) {
      if ((_isPointerType = isPointerEventType(e, 'up')) &&
          !isPrimaryTouch(e)) {
        return;
      }
      cancelLongTap();

      // swipe
      if ((touch.x2 && Math.abs(touch.x1 - touch.x2) > 30) ||
          (touch.y2 && Math.abs(touch.y1 - touch.y2) > 30)) {
        swipeTimeout = setTimeout(function() {
          if (touch.el) {
            touch.el.trigger('swipe');
            touch.el.trigger('swipe' + (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2)));
          }
          touch = {};
        }, 0);
      }// normal tap
      else if ('last' in touch) {
        // don't fire tap when delta position changed by more than 30 pixels,
        // for instance when moving to a point and back to origin

        if (deltaX < 30 && deltaY < 30) {
          // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
          // ('tap' fires before 'scroll')
          tapTimeout = setTimeout(function() {

            // trigger universal 'tap' with the option to cancelTouch()
            // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
            const event = $.Event('tap');
            event.cancelTouch = cancelAll;
            // [by paper] fix -> "TypeError: 'undefined' is not an object (evaluating 'touch.el.trigger'), when double tap
            if (touch.el) touch.el.trigger(event);

            // trigger double tap immediately
            if (touch.isDoubleTap) {
              if (touch.el) touch.el.trigger('doubleTap');
              touch = {};
            }

            // trigger single tap after 250ms of inactivity
            else {
              touchTimeout = setTimeout(function() {
                touchTimeout = null;
                if (touch.el) touch.el.trigger('singleTap');
                touch = {};
              }, 250);
            }
          }, 0);
        }
        else {
          touch = {};
        }
      }
      deltaX = deltaY = 0;
    };

    $(document).on(eventMap.up, up)
               .on(eventMap.down, down)
               .on(eventMap.move, move);

    // when the browser window loses focus,
    // for example when a modal dialog is shown,
    // cancel all ongoing events
    $(document).on(eventMap.cancel, cancelAll);

    // scrolling the window indicates intention of the user
    // to scroll, not tap or swipe, so cancel all ongoing events
    $(window).on('scroll', cancelAll);

    initialized = true;
  }

  ['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown',
    'doubleTap', 'tap', 'singleTap', 'longTap'].forEach(function(eventName) {
    $.fn[eventName] = function(callback) {
      return this.on(eventName, callback);
    };
  });

  $.touch = { setup: setup };

  $(document).ready(setup);
}
