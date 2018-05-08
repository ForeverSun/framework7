import React from 'react';
import Utils from '../utils/utils';
import Mixins from '../utils/mixins';
import __reactComponentSlots from '../runtime-helpers/react-component-slots.js';
import __reactComponentSetProps from '../runtime-helpers/react-component-set-props.js';
class F7Toolbar extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  hide(animate) {
    const self = this;
    if (!self.$f7)
      return;
    self.$f7.toolbar.hide(this.refs.el, animate);
  }
  show(animate) {
    const self = this;
    if (!self.$f7)
      return;
    self.$f7.toolbar.show(this.refs.el, animate);
  }
  get classes() {
    const self = this;
    return Utils.classNames(self.props.className, {
      toolbar: true,
      'toolbar-bottom-md': self.props.bottomMd,
      tabbar: self.props.tabbar,
      'tabbar-labels': self.props.labels,
      'tabbar-scrollable': self.props.scrollable,
      'toolbar-hidden': self.props.hidden,
      'no-shadow': self.props.noShadow,
      'no-hairline': self.props.noHairline
    }, Mixins.colorClasses(self));
  }
  componentDidMount() {
    const self = this;
    self.$f7ready(f7 => {
      if (self.props.tabbar)
        f7.toolbar.setHighlight(self.refs.el);
    });
  }
  componentDidUpdate() {
    const self = this;
    if (self.props.tabbar && self.$f7) {
      self.$f7.toolbar.setHighlight(self.refs.el);
    }
  }
  render() {
    const self = this;
    return React.createElement('div', {
      ref: 'el',
      className: self.classes
    }, this.slots['before-inner'], self.props.inner ? React.createElement('div', { className: 'toolbar-inner' }, this.slots['default']) : this.slots['default'], this.slots['after-inner']);
  }
  get slots() {
    return __reactComponentSlots(this.props);
  }
}
__reactComponentSetProps(F7Toolbar, {
  id: [
    String,
    Number
  ],
  bottomMd: Boolean,
  tabbar: Boolean,
  labels: Boolean,
  scrollable: Boolean,
  hidden: Boolean,
  noShadow: Boolean,
  noHairline: Boolean,
  inner: {
    type: Boolean,
    default: true
  },
  ...Mixins.colorProps
});
export default F7Toolbar;