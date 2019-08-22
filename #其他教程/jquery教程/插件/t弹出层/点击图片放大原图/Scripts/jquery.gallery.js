﻿(function ($) {
    $.fn.gallery = function () {
        return this.each(function () {
            //将this变量保存到self，目的是为了避免程序错误
            //至于原因，上章简单提到this在函数上下中中代表的对象不同
            var self = $(this);
            //统一将小图的高度设置成100（根据个人需要可以调整，或者提供options选项）
            self.height(100);

            //添加click事件
            self.click(function () {
                //移除id为myImgGallery的对象，其实这个对象就是大图对象
                //每次点击的时候，都要移除上一次点击时产生的大图
                $('#myImgGallery').remove();

                self.clone() //jquery的clone方法，clone图片
                    .attr('id', 'myImgGallery')//设置id为myImgGallery
                    .height($(window).height() / 2)//将图片高度设置为页面可用区域高度的一半（根据自己的需要也可以设置成其他值）
                    .css({
                        position: 'absolute'
                    })
                    .prependTo('body')//将大图添加到body对象中
                    //使用自己创建的center插件，实现图片居中
                    //注意，一定要将clone的对象添加到body后才能调用center方法，否则clone对象的width和height都为0
                    .center()
                    .click(function () {//添加大图的click事件
                        $(this).remove(); //点击大图时，删除本身
                    });
            });
        });
    };
    $.fn.center = function () {
        return this.each(function () {
            $(this).css({
                //设置绝对定位，这样他就会浮动在最上层（必要的情况下可以设置zindex属性）
                position: 'absolute',
                //设置垂直居中对齐
                top: ($(window).height() - $(this).height()) / 2 + $(window).scrollTop() + 'px',
                //设置水平居中对齐
                left: ($(window).width() - $(this).width()) / 2 + $(window).scrollLeft() + 'px'
            });
        });
    };
})(jQuery);