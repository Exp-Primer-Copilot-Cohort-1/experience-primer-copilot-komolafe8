function skillsMember()
{
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var memberValue = member.options[member.selectedIndex].value;
    if(memberValue == "1")
    {
        skills.style.display = "block";
    }
    else
    {
        skills.style.display = "none";
    }
}