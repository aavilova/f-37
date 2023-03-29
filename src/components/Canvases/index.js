import useAnimation from "../../hooks/useAnimation";

function Canvases({radiis, draws, speeds}) {
  const {fractalRef, circlesRef} = useAnimation(radiis, draws, speeds);

  return (
    <div>
      <canvas ref={fractalRef} id="fractal" width="600" height="600"></canvas>
      <canvas ref={circlesRef} id="circles" width="600" height="600"></canvas>
    </div>
  )
}

export default Canvases;
