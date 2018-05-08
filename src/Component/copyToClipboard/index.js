/**
 *
 * 参数如下：
 * content            要复制的文本                               string
 * children           可选参数, 在需要包含复杂元素时使用           React Element
 * 
 */

import {message} from 'antd';
const RESULT = {
    SUCCESS: 1,
    ACCESSERR: 2,
    SUPPORTERR: 3
};
const Copier = {
    copy(target) {
        target.select();
        target.setSelectionRange(0, target.value.length);
        try {
            // document.execCommand返回值不能正确反应“是否允许访问剪贴板”，window.clipboardData.setData可以，所以用了它
            if (window.clipboardData ? window.clipboardData.setData('Text', target.value) : document.execCommand('copy')) {
                return RESULT.SUCCESS;
            } else {
                return RESULT.ACCESSERR
            }
        } catch (e) {
            return RESULT.SUPPORTERR;
        }
    },
    copyWithPrompt(target) {
        switch(this.copy(target)) {
            case RESULT.SUCCESS:
                message.success("已复制", 1);
                break;
            case RESULT.ACCESSERR:
                message.info("您已经设置了不允许当前页面访问剪贴板，请刷新页面后重新设置",);
                break;
            case RESULT.SUPPORTERR:
                message.info("您当前使用的浏览器不支持复制功能，请使用Ctrl+D快捷键");
                break;
        }
    }
};

export default Copier;
