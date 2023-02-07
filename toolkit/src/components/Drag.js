import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import Loader from 'react-loading-overlay';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import * as htmlToImage from 'html-to-image';

const Drag = () => {
  const [isLoading, setLoading] = useState(false);

  // dwnload screenshot
  const handleClick = () => {
    htmlToImage
      .toJpeg(document.getElementById('hi'), { quality: 0.95 })
      .then(function (dataUrl) {
        const link = document.createElement('a');
        link.download = 'screenshot.jpeg';
        link.href = dataUrl;
        link.click();
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <div>
        {/* load  image after 3sec */}
        <Loader active={isLoading} spinner text="Loading...">
          {/* drag image anywhere */}
          <Draggable>
            <div className="draggable-element">
              {' '}
              <img
                src="https://cdn.pixabay.com/photo/2014/09/19/18/19/veli-452834__340.jpg"
                height="150px"
                alt=""
              />
            </div>
          </Draggable>
        </Loader>
      </div>

      {/* tooltip */}
      <div>
        <p id="hi">
          Lorem Ipsum is <span data-tip="This is a tooltip">simply dummy</span>
          text of the printing and typesetting industry.
        </p>
        <ReactTooltip
          place="top"
          type="dark"
          effect="solid"
          border={false}
          className="text-tooltip-custom-class"
        />
      </div>
      <div>
        {/* takes screenshot and dwnload as image */}

        <button onClick={handleClick}>Download screenshot</button>
      </div>
    </div>
  );
};

export default Drag;
