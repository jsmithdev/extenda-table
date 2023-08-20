//import { api } from 'lwc'
import LightningDatatable from 'lightning/datatable'
import PicklistTemplate from './picklist-template.html'
import MultiSelectTemplate from './multiselect-template.html'
import InputTemplate from './input-template.html'

export default class ExtendaTable extends LightningDatatable {
    
    constructor() {
        super()
    }

	/* handleChange({ detail }) {
		this.dispatchEvent(new CustomEvent('change', {
			detail,
			composed: true,
			bubbles: true,
		}))
	} */

    static customTypes = {
        picklist: {
            template: PicklistTemplate,
            typeAttributes: [
				'label', 
				'placeholder', 
				'options', 
				'value',
				'hide',
				'relatedTo',
				'field',
				'readOnly',
			],
		},
        multiselect: {
            template: MultiSelectTemplate,
            typeAttributes: [
				'label', 
				'placeholder', 
				'options', 
				'value', 
				'header',
				'hide',
				'relatedTo',
				'field',
			],
        },
        input: {
            template: InputTemplate,
            standardCellLayout: false,
            typeAttributes: [
				'label', 
				'placeholder', 
				'options', 
				'value',
				'hide',
				'relatedTo',
				'field',
				'variant',
				'editable', 
				'inputType',
			],
        },
    }
}


// If you want to load custom css post render:
/*
import { loadStyle } from 'lightning/platformResourceLoader';
import ExtendaTableCSS from '@salesforce/resourceUrl/ExtendaTable';

async renderedCallback() {
    
    if(!this.hasRendered){
        await Promise.all([
            loadStyle(this, ExtendaTableCSS),
        ])
        this.hasRendered = true
    }
} 
*/