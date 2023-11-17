"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Edit=void 0;const classnames_1=__importDefault(require("classnames")),element_1=require("@wordpress/element"),block_templates_1=require("@woocommerce/block-templates"),block_editor_1=require("@wordpress/block-editor"),sanitize_html_1=require("../../../utils/sanitize-html");function Edit({attributes:e}){const{description:t,title:o,blockGap:c}=e,l=(0,block_templates_1.useWooBlockProps)(e),s=(0,block_editor_1.useInnerBlocksProps)({className:(0,classnames_1.default)("wp-block-woocommerce-product-section__content",`wp-block-woocommerce-product-section__content--block-gap-${c}`)},{templateLock:"all"}),r=o?"fieldset":"div",i="fieldset"===r?"legend":"div";return(0,element_1.createElement)(r,{...l},o&&(0,element_1.createElement)(i,{className:"wp-block-woocommerce-product-section__heading"},(0,element_1.createElement)("h2",{className:"wp-block-woocommerce-product-section__heading-title"},o),t&&(0,element_1.createElement)("p",{className:"wp-block-woocommerce-product-section__heading-description",dangerouslySetInnerHTML:(0,sanitize_html_1.sanitizeHTML)(t)})),(0,element_1.createElement)("div",{...s}))}exports.Edit=Edit;