import * as React from 'react';
import styles from './Switchmeee.module.scss';
import { ISwitchmeeeProps } from './ISwitchmeeeProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Switchmeee extends React.Component<ISwitchmeeeProps, {}> {

  public constructor(props:ISwitchmeeeProps){
    super(props);
/*
    this.state = { 

    };
*/

// because our event handler needs access to the component, bind 
//  the component to the function so it can get access to the
//  components properties (this.props)... otherwise "this" is undefined
// this.onLinkClick = this.onLinkClick.bind(this);

}

public componentDidMount() {
  this._updateStateOnPropsChange();
  console.log('Mounted!');
}


/***
*         d8888b. d888888b d8888b.      db    db d8888b. d8888b.  .d8b.  d888888b d88888b 
*         88  `8D   `88'   88  `8D      88    88 88  `8D 88  `8D d8' `8b `~~88~~' 88'     
*         88   88    88    88   88      88    88 88oodD' 88   88 88ooo88    88    88ooooo 
*         88   88    88    88   88      88    88 88~~~   88   88 88~~~88    88    88~~~~~ 
*         88  .8D   .88.   88  .8D      88b  d88 88      88  .8D 88   88    88    88.     
*         Y8888D' Y888888P Y8888D'      ~Y8888P' 88      Y8888D' YP   YP    YP    Y88888P 
*                                                                                         
*                                                                                         
*/

public componentDidUpdate(prevProps){


  let rebuildPart = this.props.pivotPropsObject != prevProps.pivotPropsObject ? true : false ;
  if (rebuildPart === true) {
    this._updateStateOnPropsChange();
  }
}

  public render(): React.ReactElement<ISwitchmeeeProps> {
    console.log('Switchmeee props:', this.props );
    let switcherProps = <div> { JSON.stringify( this.props.pivotPropsObject ) } </div>;


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

  private _updateStateOnPropsChange() {
    console.log('_updateStateOnPropsChange');
    return null;
  }
}
