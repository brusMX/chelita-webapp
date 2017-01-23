import React from 'react';

import {
  Row,
  Col,
  Grid,
  Panel,
  PanelBody,
  PanelHeader,
  FormControl,
  PanelContainer,
} from '@sketchpixy/rubix';

export default class Home extends React.Component {
  componentDidMount() {
    $('.dial').knob();
    $('.knob').knob({
      draw: function() {
        // 'tron' case
        if(this.$.data('skin') == 'tron') {
          var a = this.angle(this.cv)  // Angle
              , sa = this.startAngle          // Previous start angle
              , sat = this.startAngle         // Start angle
              , ea                            // Previous end angle
              , eat = sat + a                 // End angle
              , r = true;

          this.g.lineWidth = this.lineWidth;

          this.o.cursor
              && (sat = eat - 0.3)
              && (eat = eat + 0.3);

          if(this.o.displayPrevious) {
            ea = this.startAngle + this.angle(this.value);
            this.o.cursor
                && (sa = ea - 0.3)
                && (ea = ea + 0.3);
            this.g.beginPath();
            this.g.strokeStyle = this.previousColor;
            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
            this.g.stroke();
          }

          this.g.beginPath();
          this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
          this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
          this.g.stroke();

          this.g.lineWidth = 2;
          this.g.beginPath();
          this.g.strokeStyle = this.o.fgColor;
          this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
          this.g.stroke();

          return false;
        }
      }
    });

    function clock() {
      var $s = $('.second'),
          $m = $('.minute'),
          $h = $('.hour'),
          d = new Date(),
          s = d.getSeconds(),
          m = d.getMinutes(),
          h = d.getHours();
      $s.val(s).trigger('change');
      $m.val(m).trigger('change');
      $h.val(h).trigger('change');
      setTimeout(clock, 1000);
    }
    clock();
  }

  render() {
    return (
      <div>
        <Row>
          <Col sm={12}>
            <PanelContainer>
              <PanelHeader className='bg-purple fg-white'>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      <h3>Keg Status</h3>
                    </Col>
                  </Row>
                </Grid>
              </PanelHeader>
              <PanelBody>
                <Grid>
                  <br/>
                  <Row>
                    <Col xs={6} className='text-center'>
                      <input type='text' defaultValue='75' className='dial autosize' data-width='100%' data-fgcolor='#4DBD33' />
                    </Col>
                    <Col xs={6} className='text-center'>
                      <input type='text' defaultValue='29' className='dial autosize' data-width='100%' data-cursor='true' data-thickness='.3' data-fgcolor='#ffcccc' />
                    </Col>

                  </Row>
                  <Row>
                    <Col xs={6} className='text-center'>
                      <h3>Mac and Jacks</h3>
                    </Col>
                    <Col xs={6} className='text-center'>
                      <h3>Amber Ale</h3>
                    </Col>

                  </Row>
                  <br/>
                </Grid>
              </PanelBody>
            </PanelContainer>
          </Col>
        </Row>
        
      </div>
    );
  }
}
