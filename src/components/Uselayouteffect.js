import React from 'react';
export default function uselayouteffect() {
  const [show, setShow] = React.useState(false);
  const button = React.useRef();
  const popup = React.useRef();
  // useLayoutEffect hook similar to useEffect but useEffect is async and useLayoutEffect is sync method.don't use anytime.
  React.useLayoutEffect(() => {
    if (popup.current == null || button.current == null) return;
    const { botton } = button.current.getBoundingClientRect();
    popup.current.style.top = `${botton + 25}px`;
    console.log('this is botton value ' + botton);
    console.log('this is uselayouteffect');
  }, [show]);
  return (
    <div>
      <h2>useLayoutEffect</h2>
      <button
        type="button"
        onClick={() => {
          setShow((prevShow) => !prevShow);
        }}
        ref={button}
      >
        OnChange
      </button>
      {show && (
        <div style={{ position: 'absolute' }} ref={popup}>
          This is PopUP
        </div>
      )}
    </div>
  );
}
