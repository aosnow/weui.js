/*
* Mudas(mschool.tech) is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2019 mudas. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/

const regex = /^(\d+)(?:-(\d+))?(?:\/(\d+))?$/g;
const constraints = [[1, 31], [1, 12], [0, 6]];

/**
 * Schedule
 */
class Schedule {
  constructor(fields, start, end) {
    /**
     * dayOfMonth
     * @type {Array}
     */
    this._dates = fields[0];

    /**
     * month
     * @type {Array}
     */
    this._months = fields[1];

    /**
     * dayOfWeek
     * @type {Array}
     */
    this._days = fields[2];

    /**
     * start
     * @type {Date}
     */
    this._start = start;

    /**
     * end
     * @type {Date}
     */
    this._end = end;

    /**
     * cursor
     * @type {Date}
     * @private
     */
    this._pointer = start;
  }

  /**
   * 查询下一个合法范围内的日期
   * @return {Date}
   * @private
   */
  _findNext() {
    let next;
    let cond = true;
    while (cond) {
      if (this._end.getTime() - this._pointer.getTime() < 0) {
        throw new Error(`out of range, end is ${this._end}, current is ${this._pointer}`);
      }

      const month = this._pointer.getMonth();
      const date = this._pointer.getDate();
      const day = this._pointer.getDay();

      const mc = this._months.indexOf(month + 1) !== -1;
      const dc = this._dates.indexOf(date) !== -1;
      const dayc = this._days.indexOf(day) !== -1;

      if (mc && dc && dayc) {
        next = new Date(this._pointer);
        break;
      }
      else if (!mc) {
        this._pointer.setMonth(month + 1);
        this._pointer.setDate(1);
      }
      else if (!dc) {
        this._pointer.setDate(date + 1);
      }
      else {
        this._pointer.setDate(date + 1);
      }

    }
    return next;
  }

  /**
   * fetch next date
   */
  next() {
    const value = this._findNext();
    // move next date
    this._pointer.setDate(this._pointer.getDate() + 1);
    return {
      value: value,
      done: !this.hasNext()
    };
  }

  /**
   * has next
   * @returns {boolean}
   */
  hasNext() {
    try {
      this._findNext();
      return true;
    }
    catch (e) {
      return false;
    }
  }
}

function parseField(field, constraints) {
  const low = constraints[0];
  const high = constraints[1];
  let result = [];
  let pointer;

  // * 号等于最低到最高
  field = field.replace(/\*/g, low + '-' + high);

  // 处理 1,2,5-9 这种情况
  const fields = field.split(',');
  const replacer = function($0, lower, upper, step) {
    // ref to `cron-parser`
    step = parseInt(step, 10) || 1;
    // Positive integer higher than constraints[0]
    lower = Math.min(Math.max(low, ~~Math.abs(lower)), high);

    // Positive integer lower than constraints[1]
    upper = upper ? Math.min(high, ~~Math.abs(upper)) : lower;

    // Count from the lower barrier to the upper
    pointer = lower;

    do {
      result.push(pointer);
      pointer += step;
    } while (pointer <= upper);

    // return result;
  };

  for (let i = 0, len = fields.length; i < len; i++) {
    const f = fields[i];
    if (f.match(regex)) {
      f.replace(regex, replacer);
    }
  }
  return result;
}

/**
 *
 * @param expr
 * @param start
 * @param end
 * @returns {*}
 */
function parse(expr, start, end) {
  const atoms = expr.replace(/^\s\s*|\s\s*$/g, '').split(/\s+/);
  const fields = [];
  atoms.forEach((atom, index) => {
    const constraint = constraints[index];
    fields.push(parseField(atom, constraint));
  });
  return new Schedule(fields, start, end);
}

export default parse;
