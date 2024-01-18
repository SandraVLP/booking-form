import React from "react";
import DataPicker from "../DataPicker/DataPicker";
import Option from "../Option/Option";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
          [name]: value,
        });
      };
    
      handleSubmit =(event) => {
        event.preventDefault();
        this.props.onBooking();
      }
  render() {

    return (
      <section className="form">
        <form
          className="form__container"
          onSubmit={this.handleSubmit}
          noValidate
        >
          <label className="form__label">
            Выбор башни:
            <select value={this.state.value} name="tower" onChange={this.handleChange}>
              <Option value="A" text="A" />
              <Option value="B" text="B" />
            </select>
          </label>
          <label className="form__label">
            Выбор этажа:{" "}
            <select value={this.state.value} name="floor" onChange={this.handleChange}>
              {this.props.floors.map((floor) => (
                <Option value={floor} text={floor} />
              ))}
            </select>
          </label>
          <label className="form__label">
            Выбор переговорки:
            <select value={this.state.value} name="room" onChange={this.handleChange}>
            {this.props.rooms.map((room) => (
                <Option value={room} text={room} />
              ))}
            </select>
          </label>
          <DataPicker />
          <button
            type="submit"
            className={`enter__button ${
              this.props.disabled ? "enter__button_inactive" : ""
            }`}
            disabled={this.props.disabled}
          >
            Отправить
          </button>
          <button
            type="submit"
            className={`enter__button ${
              this.props.disabled ? "enter__button_inactive" : ""
            }`}
            disabled={this.props.disabled}
          >
            Очистить форму
          </button>
        </form>
      </section>
    );
  }
}

export default Form;
