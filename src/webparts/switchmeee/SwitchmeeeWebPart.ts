import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  IWebPartPropertiesMetadata,

  PropertyPaneDynamicFieldSet,
  PropertyPaneDynamicField,
  DynamicDataSharedDepth
} from '@microsoft/sp-webpart-base';

import * as strings from 'SwitchmeeeWebPartStrings';
import Switchmeee from './components/Switchmeee';
import { ISwitchmeeeProps } from './components/ISwitchmeeeProps';

/**
 * DD Subscriber: Step 0 - import from sp-dynamic-data
 */
import { DynamicProperty } from '@microsoft/sp-component-base';

export interface ISwitchmeeeWebPartProps {
  description: string;

  /**
   * DD Subscriber: Step 1 - add this.properties.pivotProps to WebPartProps
   */
  pivotPropsObject: DynamicProperty<any>;
}

export default class SwitchmeeeWebPart extends BaseClientSideWebPart<ISwitchmeeeWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISwitchmeeeProps > = React.createElement(
      Switchmeee,
      {
        description: this.properties.description,
        /**
         * DD Subscriber: Step 2 - ( 5:01 ) pass down props to react component
         */
        pivotPropsObject: this.properties.pivotPropsObject.tryGetValue(),
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  
  /**
   * DD Subscriber: Step 3 - add this.properties.pivotProps to WebPartProps
   */
  protected get propertiesMetadata(): IWebPartPropertiesMetadata {
    return {
      'pivotPropsObject': { dynamicPropertyType: 'object' }
    }
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }


  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [

  /**
   * DD Subscriber: Step 4 - add options to PropertyPane
   */
                PropertyPaneDynamicFieldSet({
                  label: 'Pick pivotPropsObject Source',
                  fields: [
                    PropertyPaneDynamicField('pivotPropsObject', {
                      label: 'Test Source',

                     })
                  ],
   /**
   * DD Subscriber: Step 5 - ( 10: 45 ) :  sharedConfiguration in case you don't want
   */
                  sharedConfiguration: {
                    depth: DynamicDataSharedDepth.Property,
                    /*
                    source: {
                      sourcesLabel: 'Select webpart containing your source'
                    }
                    */
                  }
                }),
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
