const seatAvailable = document.getElementById("seatAvailable");
const ageAbove50 = document.getElementById("ageAbove50");
const hasAadhar = document.getElementById("hasAadhar");
const checkButton = document.getElementById("checkStatus");
const passengerStatus = document.getElementById("status");

checkButton.addEventListener("click", function () {
  let isSeatAvailable = seatAvailable.checked;
  let isAgeAbove50 = ageAbove50.checked;
  let hasAadharCard = hasAadhar.checked;
  console.log(isSeatAvailable, isAgeAbove50, hasAadharCard);

  let feedback;
  if (isSeatAvailable) {
    console.log("Seat is available");
    feedback = "Seat is available";
    if (isAgeAbove50) {
      console.log(", Aged above 50");
      feedback = feedback + ", Aged above 50";
      if (hasAadharCard) {
        console.log("Has Aadhar card");
        feedback = feedback + ", Has Aadhar card";
        let confirmMsg = confirm("Are you sure do yo wan't to come inside?");
        console.log("confirmmsg", confirmMsg);
        if (confirmMsg) {
          alert("Please open the door");
        }
      } else {
        console.log("but you don't have Aadhar card");
        feedback = feedback + ", but you don't have Aadhar card";
      }
    } else {
      console.log("but your age is below 50 years");
      feedback = feedback + ", but your age is below 50 years";
    }
  } else {
    console.log("Seat is not available");
    feedback = "Seat is not available";
  }

  passengerStatus.textContent = feedback;
});
