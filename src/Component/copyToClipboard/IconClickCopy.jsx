import React from 'react';
import {Icon} from 'antd';
import Copier from './index';
import './style.less';

class IconClickCopy extends React.Component{
    copyToClipboard() {
        Copier.copyWithPrompt(this.hiddenBoard);
    }
    render() {
        const _children = this.props.children || this.props.content;
        return this.props.content ? (
            <span className="icon-click-copy">
                {_children}
                <textarea className="hidden-board" defaultValue={this.props.content} ref={node => this.hiddenBoard = node}/>
                <Icon type="copy" onClick={this.copyToClipboard.bind(this)} title='复制'/>
            </span>
        ) : (this.props.content || null);
    }
};

export default IconClickCopy;
