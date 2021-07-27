mybutton= document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll= function() {scrollFunction()};
function scrollFunction()
{
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) 
    {
        mybutton.style.display = "block";
    }
    else
    {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction()
{
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; //For Chrome,Firefox,IE and Opera
}

// FUNCTION TO FETCH DATA FROM API
function fetch()
{
    $.get("https://api.covid19api.com/summary",function (data)
        {
            var tbval = document.getElementById('tbval');
            for (var i = 1; i < (data['Countries'].length); i++)
            {
                var x = tbval.insertRow();
                x.insertCell(0);
                tbval.rows[i].cells[0].innerHTML = data['Countries'][i - 1]['Country'];
                tbval.rows[i].cells[0].style.background = '#9b9ec7';
                tbval.rows[i].cells[0].style.color = '#fff';

                x.insertCell(1);
                tbval.rows[i].cells[1].innerHTML = data['Countries'][i - 1]['TotalConfirmed'];
                tbval.rows[i].cells[1].style.background = '#fabd02';

                x.insertCell(2);
                tbval.rows[i].cells[2].innerHTML = data['Countries'][i - 1]['TotalRecovered'];
                tbval.rows[i].cells[2].style.background = '#9cc850';

                x.insertCell(3);
                tbval.rows[i].cells[3].innerHTML = data['Countries'][i - 1]['TotalDeaths'];
                tbval.rows[i].cells[3].style.background = '#e3242b';

                x.insertCell(4);
                tbval.rows[i].cells[4].innerHTML = data['Countries'][i - 1]['NewConfirmed'];
                tbval.rows[i].cells[4].style.background = '#fabd02';

                x.insertCell(5);
                tbval.rows[i].cells[5].innerHTML = data['Countries'][i - 1]['NewRecovered'];
                tbval.rows[i].cells[5].style.background = '#9cc850';

                x.insertCell(6);
                tbval.rows[i].cells[6].innerHTML = data['Countries'][i - 1]['NewDeaths'];
                tbval.rows[i].cells[6].style.background = '#ff0000';
            }
        }
    );
}

function myFunction()
{
  document.getElementById("myForm").reset();
}