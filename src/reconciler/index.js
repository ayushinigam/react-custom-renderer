
import emptyObject from 'fbjs/lib/emptyObject';
import { createElement,getHostContextNode } from '../utils/createElement';

const Reconciler = require('react-reconciler');

const Renderer = Reconciler({
	appendInitialChild(parentInstance, child) {
		if (parentInstance.appendChild) {
			parentInstance.appendChild(child);
		}
	},
	appendChild(parentInstance, child) {
		if (parentInstance.appendChild) {
			parentInstance.appendChild(child);
		}
	},
	appendChildToContainer(parentInstance, child) {
		if (parentInstance.appendChild) {
			parentInstance.appendChild(child);
		}
	  },

	createInstance(type, props, internalInstanceHandle) {
		console.log(type, 'create instance');
		return createElement(type, props);
	},

	createTextInstance(text, rootContainerInstance, internalInstanceHandle) {
		return text;
	},

	finalizeInitialChildren(wordElement, type, props) {
		if(typeof props.children === 'object'){
			return true;
		}
		return false;
	},

	getPublicInstance(inst) {
		return inst;
	},

	prepareForCommit() {
		//noop
	},

	prepareUpdate(wordElement, type, oldProps, newProps) {
		return true;
	},

	resetAfterCommit() {
		// noop
	},

	resetTextContent(wordElement) {
		// noop
	},

	getRootHostContext(instance) {
		return getHostContextNode(instance);
	},

	getChildHostContext(instance) {
		return true;
	},

	shouldSetTextContent(type, props) {
		if(typeof props.children === 'object'){
			return true;
		}
		return false;
		
	},
	commitUpdate() {
		console.log('commit update');
	  },

	now: () => {},

	useSyncScheduling: true,

	supportsMutation: true,
});

export default Renderer;
