import React from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router';

import {
    //Common
    Grid,
    Row,
    Col,
    Panel,
    PanelBody,
    PanelHeader,
    FormControl,
    PanelContainer,
    //format for the elements
    Badge,
     LoremIpsum,
} from '@sketchpixy/rubix';

@withRouter
class ActivityItem extends React.Component {
  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();

    this.props.router.push('/ltr/mailbox/mail');
  }
  render() {
    var classes = classNames({
      'inbox-item': true,
      'unread': this.props.unread
    });

    var linkProps = {
      href: '/ltr/mailbox/mail',
      onClick: ::this.handleClick,
      className: classes,
    };

    return (
      <a {...linkProps}>
      <Row>
        <div className='inbox-avatar'>
            <Col sm={1}>
                <img src={this.props.src} width='40' height='40' className={this.props.imgClass + ' hidden-xs'} />
            </Col>
            <Col sm={7}>
                    <div className='fg-darkgrayishblue75'>{this.props.name}</div>
                    <div><small><Badge className={this.props.labelClass} style={{marginRight: 5, display: this.props.labelValue ? 'inline':'none'}}>{this.props.labelValue}</Badge><span>{this.props.description}</span></small></div>
            </Col>
            <Col sm={4}>
                <div className='inbox-date hidden-sm hidden-xs fg-darkgray40 text-right'>
                    <div style={{position: 'relative', top: 5}}>{this.props.date}</div>
                    <div style={{position: 'relative', top: -5}}><small>#{this.props.itemId}</small></div>
                </div>
            </Col>
        </div>
        </Row>
      </a>
    );
  }
}

export default class BeerActivity extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            history :[]
        };
    }
    render(){
        return(
            <PanelContainer>
                <PanelHeader className='bg-purple fg-white'>
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                <h3>Latest beer activity...</h3>
                            </Col>
                        </Row>
                    </Grid>
                </PanelHeader>
                <PanelBody className='panel-sm-12 panel-xs-12' style={{ paddingTop: 0 }}>
                    <Grid>
                        <Row>
                            <Col xs={12}>
                            <ActivityItem itemId={1} unread src='/imgs/app/avatars/avatar5.png' imgClass='border-green' name='Jordyn Ouellet (8)' labelValue='SOME LABEL' labelClass='bg-green fg-white' description={<span><strong>Early access: </strong><span><LoremIpsum query='1s'/></span></span>} date='Aug 20th' /><hr />
                            <ActivityItem itemId={2} unread src='/imgs/app/avatars/avatar7.png' imgClass='border-orange' name='Toby King (4)' labelValue='SOME LABEL' labelClass='bg-orange fg-white' description={<span><LoremIpsum query='1s'/></span>} date='Aug 19th' /><hr />
                            <ActivityItem itemId={3} unread src='/imgs/app/avatars/avatar9.png' imgClass='border-blue' name='Ava Parry' labelValue='SOME LABEL' labelClass='bg-blue fg-white' description={<span><LoremIpsum query='1s'/></span>} date='Aug 18th' /><hr />
                            <ActivityItem itemId={4} unread src='/imgs/app/avatars/avatar10.png' imgClass='border-red' name='Angelina Mills' labelValue='SOME LABEL' labelClass='bg-red fg-white' description={<span><LoremIpsum query='1s'/></span>} date='Aug 17rd' /><hr />
                            <ActivityItem itemId={5} src='/imgs/app/avatars/avatar11.png' imgClass='border-purple' name='Crystal Ford' labelValue='SOME LABEL' labelClass='bg-purple fg-white' description={<span><LoremIpsum query='1s'/></span>} date='Aug 16th' /><hr />
                            <ActivityItem itemId={6} src='/imgs/app/avatars/avatar13.png' imgClass='border-brown' name='Ju Lan' labelValue='SOME LABEL' labelClass='bg-brown fg-white' description={<span><LoremIpsum query='1s'/></span>} date='Aug 15th' /><hr />
                            <ActivityItem itemId={7} src='/imgs/app/avatars/avatar14.png' imgClass='border-pink' name='Lana Collin' labelValue='SOME LABEL' labelClass='bg-pink fg-white' description={<span><LoremIpsum query='1s'/></span>} date='Aug 14th' /><hr />
                            <ActivityItem itemId={8} src='/imgs/app/avatars/avatar15.png' imgClass='border-darkcyan' name='Ricardo Ibarra' labelValue='SOME LABEL' labelClass='bg-darkcyan fg-white' description={<span><LoremIpsum query='1s'/></span>} date='Aug 13th' /><hr />
                            <ActivityItem itemId={9} src='/imgs/app/avatars/avatar16.png' imgClass='border-orange75' name='The Unknown' labelValue='SOME LABEL' labelClass='bg-orange75 fg-white' description={<span><LoremIpsum query='1s'/></span>} date='Aug 12th' /><hr />
                            <ActivityItem itemId={10} src='/imgs/app/avatars/avatar8.png' imgClass='border-yellow' name='Antelope Inc.' labelValue='SOME LABEL' labelClass='bg-yellow fg-white' description={<span><LoremIpsum query='1s'/></span>} date='Aug 11th' /><hr />
                            </Col><hr />
                        </Row>
                    </Grid>
                </PanelBody>
            </PanelContainer>
        );
    }
}