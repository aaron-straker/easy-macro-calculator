import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.setValues = this.setValues.bind(this);
  }

  setValues(e) {
    let { dispatch, user } = this.props;
    let value = e.target.value;

    switch(e.target.name) {
      case 'weight-lbs':
        return dispatch(actionCreators.coerceKilos(value));
      case 'weight-kilos':
        return dispatch(actionCreators.coerceLBS(value));
      case 'height-inches':
        return dispatch(actionCreators.coerceCentimeters(value));
      case 'height-centimeters':
        return dispatch(actionCreators.coerceInches(value));
      case 'bodyfat':
        return dispatch(actionCreators.changeBodyFat(value));
      case 'gender':
        return dispatch(actionCreators.changeGender(value));
      case 'age':
        return dispatch(actionCreators.changeAge(value));
      case 'activity-level':
        return dispatch(actionCreators.changeActivityLevel(value));
      default:
        return;
    }
  }

  render() {
    let { user } = this.props;
    return (
      <form onSubmit={() => console.log('forms been submitted')}>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="text" className="form-control" id="age" name="age" placeholder="Age"
            value={user.age} onChange={this.setValues} />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div>
            <label className="radio-inline">
              <input type="radio" name="gender" id="gender-male" value="male"
                onChange={this.setValues} checked={user.gender === 'male'} /> Male
            </label>
            <label className="radio-inline">
              <input type="radio" name="gender" id="gender-female" value="female"
                onChange={this.setValues} checked={user.gender === 'female'} /> Female
            </label>
          </div>
        </div>

        <div className="well col-sm-12">
          <div className="form-group col-sm-6">
            <label htmlFor="weight">Weight (lbs)</label>
            <div className="input-group">
              <input type="text" className="form-control" id="weight" name="weight-lbs" placeholder="Weight (lbs)"
                value={user.lbs} onChange={this.setValues} />
              <span className="input-group-addon">lbs</span>
            </div>
          </div>

          <div className="form-group col-sm-6">
            <label htmlFor="weight">Weight (kg)</label>
            <div className="input-group">
              <input type="text" className="form-control" id="weight" name="weight-kilos" placeholder="Weight (kg)"
                value={user.kilos} onChange={this.setValues} />
              <span className="input-group-addon">kg</span>
            </div>
          </div>
        </div>
        <div className="well col-sm-12">
          <div className="form-group col-sm-6">
            <label htmlFor="height">Height (in)</label>
            <div className="input-group">
              <input type="text" className="form-control" id="height" name="height-inches" placeholder="Height (in)"
                value={user.inches} onChange={this.setValues} />
              <span className="input-group-addon">in</span>
            </div>
          </div>

          <div className="form-group col-sm-6">
            <label htmlFor="height">Height (cm)</label>
            <div className="input-group">
              <input type="text" className="form-control" id="height" name="height-centimeters" placeholder="Height (cm)"
                value={user.centimeters} onChange={this.setValues} />
              <span className="input-group-addon">cm</span>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="height">Body Fat Percentage</label>
          <input type="text" className="form-control" id="bodyfat" name="bodyfat" placeholder="Enter body fat percentage (if known)" value={user.bodyFat} onChange={this.setValues} />
        </div>

        <div className="form-group">
          <label htmlFor="activity-level">Select Your Activity Level</label>
          <select id="activity-level" className="form-control" name="activity-level"
            onChange={this.setValues} value={user.activityLevel} >
            <option value={null}>Choose which best describes your activity level</option>
            <option value="sedentary">I am sedentary (little or no exercise)</option>
            <option value="lightly-active">I am lightly active (light exercise 1-3 days per week)</option>
            <option value="moderately-active">I am moderately active (moderate exercise 3-5 days per week)</option>
            <option value="very-active">I am very active (hard exercise 6-7 days per week)</option>
            <option value="extremely-active">I am extremely active (very hard exercise and a physical job or multiple training sessions per day)</option>
          </select>
        </div>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(UserForm);
