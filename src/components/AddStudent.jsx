import { useState } from 'react'

export default function AddStudent({handleAddStudent}) {
	const [fullName, setFullname] = useState('')
	const [image, setImage] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [program, setProgram] = useState([0])
	const [graduationYear, setGraduationYear] = useState(2023)
	const [graduated, setHasGraduated] = useState(false)

	const handleNameInput = (e) => setFullname(e.target.value)
	const handleImageInput = (e) => setImage(e.target.value)
	const handlePhoneInput = (e) => setPhone(e.target.value)
	const handleEmailInput = (e) => setEmail(e.target.value)
	const handleProgramInput = (e) => setProgram(e.target.value)
	const handleGraduationYearInput = (e) => setGraduationYear(e.target.value)
	const handleHasGraduatedInput = (e) => setHasGraduated(e.target.checked)

	const handleSubmit = (e) => {
		e.preventDefault()

        handleAddStudent({ fullName, email, phone, program, image, graduationYear, graduated });

		setFullname('')
		setImage('')
		setEmail('')
		setProgram('')
		setImage('')
		setGraduationYear(2023)
		setHasGraduated(false)
	}

	return (
		<>
			{/* FORM */}
			<form>
				<span>Add a Student</span>
				<div>
					<label>
						Full Name
						<input name="fullName" type="text" onChange={handleNameInput} placeholder="Full Name" value={fullName} />
					</label>

					<label>
						Profile Image
						<input name="image" type="url" onChange={handleImageInput} placeholder="Profile Image" value={image} />
					</label>

					<label>
						Phone
						<input name="phone" type="tel" onChange={handlePhoneInput} placeholder="Phone" value={phone} />
					</label>

					<label>
						Email
						<input name="email" type="email" onChange={handleEmailInput} placeholder="Email" value={email} />
					</label>
				</div>

				<div>
					<label>
						Program
						<select name="program" onChange={handleProgramInput} value={program}>
							<option value="">-- None --</option>
							<option value="Web Dev">Web Dev</option>
							<option value="UXUI">UXUI</option>
							<option value="Data">Data</option>
						</select>
					</label>

					<label>
						Graduation Year
						<input name="graduationYear" type="number" placeholder="Graduation Year" minLength={4} maxLength={4} min={2023} max={2030} onChange={handleGraduationYearInput} value={graduationYear} />
					</label>

					<label>
						Graduated
						<input name="graduated" type="checkbox" onChange={handleHasGraduatedInput} checked={graduated} />
					</label>

					<button type="submit" onClick={handleSubmit}>
						Add Student
					</button>
				</div>
			</form>
			{/* FORM END */}
		</>
	)
}
