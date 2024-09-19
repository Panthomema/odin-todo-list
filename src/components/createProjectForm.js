const createProjectForm = document.createElement('form');
createProjectForm.setAttribute('id', 'create-project-form');

createProjectForm.innerHTML = `
  <input type="text" name="name" id="name">
  <div class="form-controls">
    <button type="submit" class="action">Add</button>
    <button type="button" class="danger">Cancel</button>
  </div>
`;

export default createProjectForm;
