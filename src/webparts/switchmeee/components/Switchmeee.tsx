import * as React from 'react';
import styles from './Switchmeee.module.scss';
import { ISwitchmeeeProps } from './ISwitchmeeeProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Switchmeee extends React.Component<ISwitchmeeeProps, {}> {


  public render(): React.ReactElement<ISwitchmeeeProps> {

    let switcherProps = <div> { JSON.stringify( this.props.pivotPropsObject ) } </div>

    return (
      <div className={ styles.switchmeee }>
        <div className={ styles.container }>
          <div className={ styles.row }>

            { switcherProps }
          </div>
        </div>
      </div>
    );
  }
}
