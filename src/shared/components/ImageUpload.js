import React, { useRef, useState, useEffect } from 'react';

import Button from './Button';

export default function ImageUpload(props) {
	const [file, setFile] = useState();
	const [previewUrl, setPreviewUrl] = useState();
	const [isValid, setIsValid] = useState();
	const [fileTooBig, setFileTooBig] = useState();

	const filePickerRef = useRef();

	useEffect(() => {
		if (!file) return;

		const fileReader = new FileReader();
		fileReader.onload = () => {
			setPreviewUrl(fileReader.result);
		};
		fileReader.readAsDataURL(file);
	}, [file]);

	const pickImageHandler = () => filePickerRef.current.click();

	const pickedHandler = e => {
		let fileIsValid = isValid;

		let pickedFile;
		if (e.target.files && e.target.files.length === 1) {
			pickedFile = e.target.files[0];
			if (pickedFile.size > 500000) {
				setFile(pickedFile);
				setFileTooBig(true);
				setIsValid(false);
				fileIsValid = false;
			} else {
				setFile(pickedFile);
				setFileTooBig(false);
				setIsValid(true);
				fileIsValid = true;
			}
		} else {
			setIsValid(false);
			fileIsValid = false;
		}

		props.onInput(props.id, pickedFile, fileIsValid);
	};

	return (
		<div className="form-group center mb-1">
			<input
				type="file"
				id={props.id}
				style={{ display: 'none' }}
				accept=".jpg,.png,.jpeg"
				ref={filePickerRef}
				onChange={pickedHandler}
			/>
			<div className="image-upload center">
				{(previewUrl || props.initialUrl) && (
					<div className="image-upload-preview">
						<img
							src={previewUrl || props.initialUrl}
							alt="Preview"
						/>
					</div>
				)}
				<Button type="button" onClick={pickImageHandler}>
					Upload Cow Image
				</Button>
			</div>
			{fileTooBig && file && <p className="error">Image too big.</p>}
		</div>
	);
}
