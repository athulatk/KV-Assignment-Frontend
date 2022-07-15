const UploadInput = ({ label }) => {
    return (
        <div class="input-field">
            <div>Upload ID Proof</div>
            <div className="fileinput-label fileupload">
                <label>Choose Files</label>
                <label for="fileinput"> Browse </label>
            </div>
            <input type="file" id="fileinput" />
        </div>
    );
};

export default UploadInput
