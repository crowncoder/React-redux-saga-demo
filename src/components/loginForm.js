import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import loginStyle from "styles/login.scss";
import "styles/login.scss";

const FormItem = Form.Item;
class NormalLoginForm extends Component {
	constructor(props) {
		super(props);
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				this.props.actions.login(values);
			}
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form
				onSubmit={this.handleSubmit.bind(this)}
				className={loginStyle.loginForm}
			>
				<FormItem>
					{getFieldDecorator("userName", {
						rules: [{ required: true, message: "Please input your username!" }]
					})(
						<Input
							prefix={<Icon type="user" style={{ fontSize: 13 }} />}
							placeholder="Username"
						/>
					)}
				</FormItem>
				<FormItem>
					{getFieldDecorator("password", {
						rules: [{ required: true, message: "Please input your Password!" }]
					})(
						<Input
							prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
							type="password"
							placeholder="Password"
						/>
					)}
				</FormItem>
				<FormItem>
					{getFieldDecorator("remember", {
						valuePropName: "checked",
						initialValue: true
					})(<Checkbox className="rememberBox">Remember me</Checkbox>)}
					<a className={loginStyle.loginFormForgot} href="">
						Forgot password
					</a>
					<Button
						type="primary"
						htmlType="submit"
						className={loginStyle.loginFormButton}
					>
						Log in
					</Button>
				</FormItem>
			</Form>
		);
	}
}

const loginForm = Form.create()(NormalLoginForm);
export default loginForm;
