import React, { Component } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";

class CreateMember extends Component {
	render() {
		function MyVerticallyCenteredModal(props) {
			return (
				<Modal
					{...props}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
				>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-vcenter">
							Create Member
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form>
							<Form.Row>
								<Form.Group as={Col} controlId="formGridFirst">
									<Form.Label>First Name</Form.Label>
									<Form.Control
										type="text"
										placeholder="Jamie"
									/>
								</Form.Group>

								<Form.Group as={Col} controlId="formGridLast">
									<Form.Label>Last Name</Form.Label>
									<Form.Control
										type="text"
										placeholder="Doe"
									/>
								</Form.Group>
							</Form.Row>

							<Form.Row>
								<Form.Group as={Col} controlId="formGridEmail">
									<Form.Label>Email</Form.Label>
									<Form.Control
										type="email"
										placeholder="Enter email"
									/>
								</Form.Group>
								<Form.Group as={Col} controlId="formGridImage">
									<Form.Label>Profile Image</Form.Label>
									<Form.File
										id="custom-file-translate-scss"
										label="Select Image"
										lang="en"
										custom
									/>
								</Form.Group>
							</Form.Row>

							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="danger" onClick={props.onHide}>
							Cancel
						</Button>
					</Modal.Footer>
				</Modal>
			);
		}

		function CreateButton() {
			const [modalShow, setModalShow] = React.useState(false);

			return (
				<>
					<Button
						variant="primary"
						onClick={() => setModalShow(true)}
					>
						Create Member
					</Button>

					<MyVerticallyCenteredModal
						show={modalShow}
						onHide={() => setModalShow(false)}
					/>
				</>
			);
		}

		return <CreateButton />;
	}
}

export default CreateMember;
