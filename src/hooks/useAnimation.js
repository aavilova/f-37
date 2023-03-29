import {useEffect, useRef} from "react";

let fCtx = null;
let cCtx = null;
let width = null;
let height = null;
let rotate = [0, 0, 0, 0, 0, 0, 0];
let pX = 0;
let pY = 0;
let rCount = 0;
let g = 255;
let b = 0;
let rD = -5;
let gD = -5;
let bD = 5;

function useAnimation(radiis, draws, speeds) {
  const fractalRef = useRef();
  const circlesRef = useRef();
  const requestRef = useRef();

  const startAnimation = () => {
    fCtx ||= fractalRef.current.getContext('2d');
    cCtx ||= circlesRef.current.getContext('2d');
    width ||= circlesRef.current.width;
    height ||= circlesRef.current.height;

    fCtx.strokeStyle = 'rgba( 0, 0, 0, 0 )';
    fCtx.fillStyle   = 'rgba( 16, 16, 16, .20 )';
    fCtx.lineWidth   = 2;

    cCtx.strokeStyle = 'rgba( 0, 0, 0, 0 )';
    cCtx.lineWidth   = 2;

    const render = () => {
      let x = width  / 2;
      let y = height / 2;
      let r = Math.min(width, height) / 2;
      let r2;
      
      fCtx.strokeStyle = 'rgba( 255, 210, 29, 1 )';

      // partially erase the line
      if (!(++rCount % 10)){
        fCtx.fillRect(0, 0, width, height);
      }

      // clear the circles
      cCtx.clearRect(0, 0, width, height);

      // draw one circle
      function drawCircle(ix) {
        cCtx.beginPath();
        cCtx.arc( x, y, r, 6, 3 * Math.PI, false );
        cCtx.stroke();

        if (draws[ix - 1]) {
          fCtx.beginPath();

          if (pX || pY) {
            fCtx.moveTo( pX, pY );
            fCtx.lineTo( x, y );
            fCtx.stroke();
          }

          pX = x;
          pY = y;
        }
      }

      // draw the circles
      for (let i = 0, l = rotate.length; i < l; i++) {
        drawCircle(i);
        r2 = r * radiis[i + 1]; // shrink each circle
        rotate[i] += .05 * speeds[i] * 10;
        x += (r - r2) * Math.cos(rotate[i]);
        y += (r - r2) * Math.sin(rotate[i]);
        r = r2;
      }

      requestRef.current = requestAnimationFrame(render);
    }

    render();
  }

  useEffect(() => {
    startAnimation();
    return () => cancelAnimationFrame(requestRef.current);
  }, [radiis, draws, speeds]);

  return {fractalRef, circlesRef};
}

export default useAnimation;
