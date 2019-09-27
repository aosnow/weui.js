// import 'weui';
import weui from '@/weui';
import 'style/weui.less';

/* dialog */
document.querySelector('#alertBtn').addEventListener('click', function() {
  weui.alert('自定义标题的alert', function() {
    console.log('ok');
  }, {
    title: '自定义标题'
  });
});

/* confirm */
document.querySelector('#confirmBtn').addEventListener('click', function() {
  weui.confirm('自定义标题的confirm', function() {
    console.log('yes');
  }, function() {
    console.log('no');
  }, {
    title: '自定义标题'
  });
});

/* toast */
document.querySelector('#toastBtn').addEventListener('click', function() {
  weui.toast('操作成功', {
    duration: 3000,
    className: 'bears'
  });
});

/* loading */
document.querySelector('#loadingBtn').addEventListener('click', function() {
  const loading = weui.loading('loading');
  setTimeout(function() {
    loading.hide();
  }, 3000);
});

/* actionSheet */
document.querySelector('#actionSheetBtn').addEventListener('click', function() {
  const asheet = weui.actionSheet({
    // title: '',
    // menus: [
    //   {
    //     label: '<i class="weui-icon-success weui-icon_msg"></i>',
    //     handler: function() {
    //       asheet.freeze();
    //       return new Promise(resolve => {
    //         setTimeout(() => {
    //           console.log('客服电话');
    //           asheet.freeze(false);
    //           resolve();
    //         }, 2000);
    //       });
    //     }
    //   }
    // ],
    title: '请选择需要的操作',
    menus: [
      {
        label: '确定',
        handler: function() {
          console.log('确定');
        }
      },
      {
        label: '取消',
        handler: function() {
          console.log('取消');
        }
      }
    ],
    actions: [
      {
        label: '取消',
        handler: function() {
          console.log('取消');
        }
      }
    ]
  });
  asheet.open();
});

/* topTips */
document.querySelector('#topTipsBtn').addEventListener('click', function() {
  weui.topTips('请填写正确的字段', {
    duration: 2500,
    type: 'error',
    close: function() {
      console.log('close');
      weui.topTips('toptips 已经关闭');
    }
  });
});

/* halfScreenDialog */
// 半屏窗口
document.querySelector('#halfScreenBtn').addEventListener('click', function() {
  const half = weui.halfScreen({
    title: '登录并激活会员卡',
    content: document.querySelector('#weui-half-screen__content').innerHTML
  });
  half.show();
});

/* OptionPicker */
// 简化的 Picker，适用于选项较少时收缩占用空间
document.querySelector('#optionPickerBtn').addEventListener('click', function() {
  weui.optionPicker({
    id: 'gender-picker',
    title: '选择性别',
    type: 'checkbox',
    options: [
      { label: '男', value: 0 },
      { label: '女', value: 1 }
    ]
  }).show();
});

/* picker */
// 普通选择器
document.querySelector('#pickerBtn').addEventListener('click', function() {
  weui.picker([{
    label: '飞机票',
    value: 0
  }, {
    label: '火车票(disabled)',
    disabled: true,
    value: 1
  }, {
    label: '的士票',
    value: 2
  }, {
    label: '住宿费',
    value: 3
  }, {
    label: '礼品费(disabled)',
    value: 4,
    disabled: true
  }, {
    label: '活动费',
    value: 5
  }, {
    label: '通讯费',
    value: 6
  }, {
    label: '补助',
    value: 7
  }, {
    label: '通讯费',
    value: 8
  }, {
    label: '其他',
    value: 9
  }], {
    defaultValue: [2],
    className: 'custom-classname',
    onChange: function(result) {
      // console.log(item, index);
      console.log(result);
    },
    onConfirm: function(result) {
      console.log('confirm');
      console.log(result);
    },
    id: 'picker',
    title: '单列选择器'
  });
});

// 时间选择器
document.querySelector('#datePickerBtn').addEventListener('click', function() {
  weui.datePicker({
    start: '2016-12-29',
    end: '2030-12-29',
    /**
     * https://zh.wikipedia.org/wiki/Cron
     * cron 表达式后三位
     * 示例：
     *  * * *                每天
     *  5 * *                每个月的5日
     *  1-10 * *             每个月的前10日
     *  1,5,10 * *           每个月的1号、5号、10号
     *  *\/2 * *             每个月的 1、3、5、7...日，注意写的时候斜杠“/”前面没有反斜杠“\”，这是因为是注释所以需要转义
     *  * 2 0                2月的每个周日
     *  * * 0,6              每个周末
     *  * * 3                每周三
     */
    cron: '* */2 0',
    defaultValue: [2017, 7, 9],
    onChange: function(result) {
      console.log(result);
    },
    onConfirm: function(result) {
      console.log(result);
    },
    id: 'datePicker',
    title: '日期选择器'
  });
});

// 多列选择器
document.querySelector('#multiPickerBtn').addEventListener('click', function() {
  weui.picker([
    {
      label: '1',
      value: '1'
    }, {
      label: '2',
      value: '2'
    }, {
      label: '3',
      value: '3'
    }
  ], [
    {
      label: 'A',
      value: 'A'
    }, {
      label: 'B',
      value: 'B'
    }, {
      label: 'C',
      value: 'C'
    }
  ], {
    defaultValue: ['3', 'A'],
    onChange: function(result) {
      console.log(result);
    },
    onConfirm: function(result) {
      console.log(result);
    },
    id: 'multiPickerBtn',
    onClose: function() {
      console.log('onClose');
    },
    title: '多列选择器'
  });
});

// 级联选择器
document.querySelector('#cascadePickerBtn').addEventListener('click', function() {
  weui.picker([
    {
      label: '广东',
      value: 0,
      children: [
        {
          label: '广州',
          value: 0,
          children: [
            {
              label: '海珠',
              value: 0
            }, {
              label: '番禺',
              value: 1
            }
          ]
        }, {
          label: '佛山',
          value: 1,
          children: [
            {
              label: '禅城',
              value: 0
            }, {
              label: '南海',
              value: 1
            }
          ]
        }
      ]
    }, {
      label: '广西',
      value: 1,
      children: [
        {
          label: '南宁',
          value: 0,
          children: [
            {
              label: '青秀',
              value: 0
            }, {
              label: '兴宁',
              value: 1
            }
          ]
        }, {
          label: '桂林',
          value: 1,
          children: [
            {
              label: '象山',
              value: 0
            }, {
              label: '秀峰',
              value: 1
            }
          ]
        }
      ]
    }
  ], {
    depth: 3,
    defaultValue: [0, 1, 1],
    onChange: function(result) {
      console.log(result);
    },
    onConfirm: function(result) {
      console.log(result);
    },
    id: 'cascadePicker',
    title: '嵌套选择器'
  });
});

/* searchbar */
weui.searchBar('#searchBar');

/* slider 因为需要获取长度，所以必须要在slider显示的时候才调用weui.slider */
let isSetSlider = false;

function setSlider() {
  if (isSetSlider) return;
  isSetSlider = true;

  // 普通slider
  const sliderValue = document.getElementById('sliderValue');
  weui.slider('#slider', {
    value: 50,
    min: 0,
    max: 200,
    input: function(percent) {
      sliderValue.innerHTML = Math.round(percent);
    },
    change: function(percent) {
      sliderValue.innerHTML = Math.round(percent);
      console.log(percent);
    }
  });

  // 带step的slider
  const sliderStepValue = document.getElementById('sliderStepValue');
  weui.slider('#sliderStep', {
    step: 10,
    value: 80,
    min: 50,
    max: 200,
    input: function(percent) {
      sliderStepValue.innerHTML = Math.round(percent);
    },
    change: function(percent) {
      sliderStepValue.innerHTML = Math.round(percent);
      console.log(percent);
    }
  });

  // 分块的slider
  const sliderBlockValue = document.getElementById('sliderBlockValue');
  weui.slider('#sliderBlock', {
    step: 100 / 3,
    value: 33.333,
    input: function(percent) {
      sliderBlockValue.innerHTML = Math.round(percent);
    },
    change: function(percent) {
      sliderBlockValue.innerHTML = Math.round(percent);
      console.log(percent);
    }
  });
}

/* tab */
weui.tab('#tab', {
  defaultIndex: 0,
  onChange: function(index) {
    console.log(index);

    if (index === 3) {
      setSlider(); // 设置slider
    }
  }
});

/* form */
// 约定正则
const regexp = {
  regexp: {
    IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/,
    VCODE: /^.{4}$/
  }
};

// 失去焦点时检测
weui.form.checkIfBlur('#form', regexp);

// 表单提交
document.querySelector('#formSubmitBtn').addEventListener('click', function() {
  weui.form.validate('#form', function(error) {
    console.log(error);
    if (!error) {
      const loading = weui.loading('提交中...');
      setTimeout(function() {
        loading.hide();
        weui.toast('提交成功', 3000);
      }, 1500);
    }
  }, regexp);
});

/* 图片自动上传 */
let uploadCount = 0;
const uploadList = [];
const uploadCountDom = document.getElementById('uploadCount');
weui.uploader('#uploader', {
  url: 'http://' + window.location.hostname + ':8002/upload',
  auto: true,
  type: 'file',
  fileVal: 'fileVal',
  compress: {
    width: 1600,
    height: 1600,
    quality: 0.8
  },
  onBeforeQueued: function(files) {
    if (['image/jpg', 'image/jpeg', 'image/png', 'image/gif'].indexOf(this.type) < 0) {
      weui.alert('请上传图片');
      return false;
    }
    if (this.size > 10 * 1024 * 1024) {
      weui.alert('请上传不超过10M的图片');
      return false;
    }
    if (files.length > 5) { // 防止一下子选中过多文件
      weui.alert('最多只能上传5张图片，请重新选择');
      return false;
    }
    if (uploadCount + 1 > 5) {
      weui.alert('最多只能上传5张图片');
      return false;
    }

    ++uploadCount;
    uploadCountDom.innerHTML = uploadCount;
  },
  onQueued: function() {
    uploadList.push(this);
    console.log(this);
  },
  onBeforeSend: function(data, headers) {
    console.log(this, data, headers);
    // $.extend(data, { test: 1 }); // 可以扩展此对象来控制上传参数
    // $.extend(headers, { Origin: 'http://127.0.0.1' }); // 可以扩展此对象来控制上传头部

    // return false; // 阻止文件上传
  },
  onProgress: function(procent) {
    console.log(this, procent);
  },
  onSuccess: function(ret) {
    console.log(this, ret);
  },
  onError: function(err) {
    console.log(this, err);
  }
});

// 缩略图预览
document.querySelector('#uploaderFiles').addEventListener('click', function(e) {
  let target = e.target;

  while (!target.classList.contains('weui-uploader__file') && target) {
    target = target.parentNode;
  }
  if (!target) return;

  let url = target.getAttribute('style') || '';
  const id = target.getAttribute('data-id');

  if (url) {
    url = url.match(/url\((.*?)\)/)[1].replace(/"/g, '');
  }
  const gallery = weui.gallery(url, {
    className: 'custom-name',
    onDelete: function() {
      weui.confirm('确定删除该图片？', function() {
        --uploadCount;
        uploadCountDom.innerHTML = uploadCount;

        for (let i = 0, len = uploadList.length; i < len; ++i) {
          const file = uploadList[i];
          if (file.id === id) {
            file.stop();
            break;
          }
        }
        target.remove();
        gallery.hide();
      });
    }
  });
});

/* 图片手动上传 */
const uploadCustomFileList = [];

// 这里是简单的调用，其余api请参考文档
weui.uploader('#uploaderCustom', {
  url: 'http://localhost:8002/upload',
  auto: false,
  onQueued: function() {
    uploadCustomFileList.push(this);
  }
});

// 手动上传按钮
document.getElementById('uploaderCustomBtn').addEventListener('click', function() {
  uploadCustomFileList.forEach(function(file) {
    file.upload();
  });
});

// 缩略图预览
document.querySelector('#uploaderCustomFiles').addEventListener('click', function(e) {
  let target = e.target;

  while (!target.classList.contains('weui-uploader__file') && target) {
    target = target.parentNode;
  }
  if (!target) return;

  let url = target.getAttribute('style') || '';
  const id = target.getAttribute('data-id');

  if (url) {
    url = url.match(/url\((.*?)\)/)[1].replace(/"/g, '');
  }
  const gallery = weui.gallery(url, {
    onDelete: function() {
      weui.confirm('确定删除该图片？', function() {
        let index;
        for (let i = 0, len = uploadCustomFileList.length; i < len; ++i) {
          const file = uploadCustomFileList[i];
          if (file.id === id) {
            index = i;
            break;
          }
        }
        if (index !== undefined) uploadCustomFileList.splice(index, 1);

        target.remove();
        gallery.hide();
      });
    }
  });
});

// infinite-scroll
let curIndex = 0;
const scroller = weui.infiniteScroll({
  target: '.weui-infinite-test',
  stater: '.weui-infinite__state',
  load() {
    console.warn('load start...');
    return new Promise(resolve => {
      setTimeout(() => {
        console.warn('load completed...');

        curIndex += 10;
        const target = document.querySelector('.weui-infinite__list');

        for (let i = curIndex - 10; i < curIndex; i++) {
          const el = document.createElement('div');
          el.setAttribute('style', 'height:60px;line-height:60px;border-bottom:1px solid #ccc;text-align:center');
          el.innerHTML = `<span>${i}</span>`;
          target.append(el);
        }

        if (curIndex >= 29) scroller.nodata();

        resolve();
      }, 3000);
    });
  }
});

// 支持免刷新页面热更新
if (module.hot) {
  module.hot.accept('@/weui', function() {
    console.log('weui updated!');
  });
}
