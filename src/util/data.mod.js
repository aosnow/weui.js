//     Zepto.js
//     (c) 2010-2016 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

// The following code is heavily inspired by jQuery's $.fn.data()

export default function($) {
  const data = Object.create(null);
  const dataAttr = $.fn.data;
  const camelize = $.camelCase;
  const exp = $.expando = 'Zepto' + (+new Date());
  const emptyArray = [];

  // Get value from node:
  // 1. first try key as given,
  // 2. then try camelized key,
  // 3. fall back to reading "data-*" attribute.
  function getData(node, name) {
    const id = node[exp];
    const store = id && data[id];

    if (name === undefined) {
      return store || setData(node);
    }
    else {
      if (store) {
        if (name in store) return store[name];
        const camelName = camelize(name);
        if (camelName in store) return store[camelName];
      }
      return dataAttr.call($(node), name);
    }
  }

  // Store value under camelized key on node
  function setData(node, name, value) {
    const id = node[exp] || (node[exp] = ++$.uuid);
    const store = data[id] || (data[id] = attributeData(node));
    if (name !== undefined) store[camelize(name)] = value;
    return store;
  }

  // Read all "data-*" attributes from a node
  function attributeData(node) {
    const store = Object.create(null);
    $.each(node.attributes || emptyArray, function(i, attr) {
      if (attr.name.indexOf('data-') === 0) {
        store[camelize(attr.name.replace('data-', ''))] =
          $.zepto.deserializeValue(attr.value);
      }
    });
    return store;
  }

  $.fn.data = function(name, value) {
    return value === undefined ?
      // set multiple values via object
           $.isPlainObject(name) ?
           this.each(function(i, node) {
             $.each(name, function(key, value) {
               setData(node, key, value);
             });
           }) :
             // get value from first element
           (0 in this ? getData(this[0], name) : undefined) :
      // set value on all elements
           this.each(function() {
             setData(this, name, value);
           });
  };

  $.data = function(elem, name, value) {
    return $(elem).data(name, value);
  };

  $.hasData = function(elem) {
    const id = elem[exp];
    const store = id && data[id];
    return store ? !$.isEmptyObject(store) : false;
  };

  $.fn.removeData = function(names) {
    if (typeof names === 'string') names = names.split(/\s+/);
    return this.each(function() {
      const id = this[exp];
      const store = id && data[id];
      if (store) {
        $.each(names || store, function(key) {
          delete store[names ? camelize(this) : key];
        });
      }
    });
  };

  // Generate extended `remove` and `empty` functions
  ['remove', 'empty'].forEach(function(methodName) {
    const origFn = $.fn[methodName];
    $.fn[methodName] = function() {
      let elements = this.find('*');
      if (methodName === 'remove') elements = elements.add(this);
      elements.removeData();
      return origFn.call(this);
    };
  });
}
