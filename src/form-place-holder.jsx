import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import DragDropImage from './assets/drag-and-drop.png'

const PLACE_HOLDER = 'form-place-holder';
const PLACE_HOLDER_HIDDEN = 'form-place-holder-hidden';

class PlaceHolder extends React.Component {
  render() {
    const placeHolderClass = this.props.show ? PLACE_HOLDER : PLACE_HOLDER_HIDDEN;
    // eslint-disable-next-line no-nested-ternary
    // const placeHolder = this.props.show ? this.props.text === 'Dropzone' ? { __html: `<div><img style="height: 284px; width: 200px;" class="container-fluid d-flex justify-content-center" src="${DragDropImage}"/></div><div>Build Your Acquittal Form Easily!</div> <ul><li>Drag and drop to Add: Simply drag any field from the sidebar and drop it into your form.</li> <li>Click to Add. Click the '+' icon to quickly add new fields.</li><li>Easily Sorting: Rearrange fields anytime by dragging them to your desired order.</li></ul>` } : { __html: '' } : { __html: '' };

    return (
      <div className="container-fluid d-flex justify-content-center align-items-center mt-5">
        <div>
          {this.props.show ? (
            this.props.text === "Dropzone" ? (
              <div>
                <img
                  style="height: 284px; width: 200px;"
                  class="container-fluid d-flex justify-content-center"
                  src={DragDropImage}
                />
                <div>Build Your Acquittal Form Easily!</div>{" "}
                <ul>
                  <li>
                    Drag and drop to Add: Simply drag any field from the sidebar
                    and drop it into your form.
                  </li>{" "}
                  <li>
                    Click to Add. Click the '+' icon to quickly add new fields.
                  </li>
                  <li>
                    Easily Sorting: Rearrange fields anytime by dragging them to
                    your desired order.
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default injectIntl(PlaceHolder);
PlaceHolder.propTypes = {
  text: PropTypes.string,
  show: PropTypes.bool,
};

PlaceHolder.defaultProps = {
  text: 'Dropzone',
  show: false,
};
