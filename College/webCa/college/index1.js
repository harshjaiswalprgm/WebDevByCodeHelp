// Function to prompt user for their basic details
function createProfile() {
    // Collecting basic details
    const name = prompt("Enter your name:");
    const age = prompt("Enter your age:");
    const profession = prompt("Enter your profession:");
  
    // Collecting multiple hobbies
    let hobbiesInput = prompt("Enter your hobbies, separated by commas:");
    const hobbies = hobbiesInput ? hobbiesInput.split(",").map(hobby => hobby.trim()) : [];
  
    // Creating the person object
    const person = { name, age, profession, hobbies };
  
    // Cloning person object using the spread operator into profile
    let profile = { ...person };
  
    // Prompting for additional information
    const addMore = prompt("Do you want to add more information? (yes or no)").toLowerCase();
  
    if (addMore === 'yes') {
      // Collect additional details if the user chooses to
      let skillsInput = prompt("Enter your skills, separated by commas:");
      const skills = skillsInput ? skillsInput.split(",").map(skill => skill.trim()) : [];
      
      const education = prompt("Enter your education:");
  
      // Adding additional details to the profile
      profile = { ...profile, skills, education };
    }
  
    // Displaying the profile using template literals
    const profileSummary = `
      Profile Summary:
      -------------------------
      Name: ${profile.name}
      Age: ${profile.age}
      Profession: ${profile.profession}
      Hobbies: ${profile.hobbies.join(", ")}
      ${profile.skills ? `Skills: ${profile.skills.join(", ")}` : ""}
      ${profile.education ? `Education: ${profile.education}` : ""}
    `;
  
    // Showing the complete profile in console or alert
    console.log(profileSummary);
    alert(profileSummary);
  }
  
  // Run the profile generator
  createProfile();
  