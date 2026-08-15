function SubmitComplaint() {
  return (
    <div>
      <h1>Submit Complaint</h1>

      <input type="text" placeholder="Complaint Title" />

      <select>
        <option>Select Category</option>
        <option>Electrical</option>
        <option>Cleanliness</option>
        <option>Internet</option>
        <option>Classroom</option>
        <option>Other</option>
      </select>

      <textarea placeholder="Describe your complaint"></textarea>

      <input type="text" placeholder="Location" />

      <button>Submit Complaint</button>
    </div>
  );
}

export default SubmitComplaint;
