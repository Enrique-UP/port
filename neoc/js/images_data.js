let content = "";
const tags = [
    {date: "5-June-2022", category: "best", text: "In Resort", img:"4june2022-1"},
    {date: "4-June-2022", category: "best", text: "In Resort", img:"4june2022-2"},
    {date: "4-June-2022", category: "best", text: "In Resort", img:"4june2022-4"},
    {date: "4-June-2022", category: "best", text: "In Resort", img:"4june2022-3"},
    {date: "4-June-2022", category: "best", text: "In Resort", img:"4june2022-6"},
    {date: "4-June-2022", category: "best", text: "In Resort", img:"4june2022-5"},
    {date: "5-June-2022", category: "", text: "In Resort", img:"4june2022-8"},
    {date: "4-June-2022", category: "", text: "In Resort", img:"4june2022-7"},
    {date: "1-May-2022", category: "politician", text: "With MLC Budaun Mr. Vagish Pathak", img:"1may2022"},
    {date: "27-March-2022", category: "best", text: "In Ghaziabad", img:"27march2022-2"},
    {date: "27-March-2022", category: "best", text: "In Ghaziabad", img:"27march2022-1"},

    {date: "27-November-2021", category: "politician", text: "Attended party function near Bilsi with BJP district president Mr. Haji Saleem", img:"27nov2021-2"},
    {date: "27-November-2021", category: "politician", text: "Attended party function near Bilsi", img:"27nov2021-1"},
    {date: "25-September-2021", category: "", text: "In old fort of Delhi", img:"25sep2021-47"},
    {date: "25-September-2021", category: "", text: "In old fort of Delhi", img:"25sep2021-46"},
    {date: "25-September-2021", category: "", text: "In old fort of Delhi", img:"25sep2021-45"},
    {date: "25-September-2021", category: "nephew", text: "In old fort of Delhi", img:"25sep2021-44"},
    {date: "25-September-2021", category: "nephew", text: "In old fort of Delhi", img:"25sep2021-43"},
    {date: "25-September-2021", category: "nephew", text: "In old fort of Delhi", img:"25sep2021-42"},
    {date: "25-September-2021", category: "nephew", text: "In old fort of Delhi", img:"25sep2021-41"},
    {date: "25-September-2021", category: "nephew", text: "In old fort of Delhi", img:"25sep2021-40"},
    {date: "25-September-2021", category: "", text: "In old fort of Delhi", img:"25sep2021-39"},
    {date: "25-September-2021", category: "", text: "In old fort of Delhi", img:"25sep2021-38"},
    {date: "25-September-2021", category: "nephew", text: "In old fort of Delhi", img:"25sep2021-37"},
    {date: "25-September-2021", category: "", text: "In old fort of Delhi", img:"25sep2021-36"},
    {date: "25-September-2021", category: "", text: "In old fort of Delhi", img:"25sep2021-35"},
    {date: "25-September-2021", category: "nephew", text: "In old fort of Delhi", img:"25sep2021-34"},
    {date: "25-September-2021", category: "best", text: "In old fort of Delhi", img:"25sep2021-33"},
    {date: "25-September-2021", category: "", text: "In old fort of Delhi", img:"25sep2021-32"},
    {date: "25-September-2021", category: "nephew", text: "In old fort of Delhi", img:"25sep2021-31"},
    {date: "25-September-2021", category: "", text: "In old fort of Delhi", img:"25sep2021-30"},
    {date: "25-September-2021", category: "nephew", text: "In old fort of Delhi", img:"25sep2021-29"},
    {date: "25-September-2021", category: "nephew", text: "In old fort of Delhi", img:"25sep2021-28"},
    {date: "25-September-2021", category: "", text: "In old fort of Delhi", img:"25sep2021-27"},
    {date: "25-September-2021", category: "", text: "In old fort of Delhi", img:"25sep2021-26"},
    {date: "25-September-2021", category: "", text: "In old fort of Delhi", img:"25sep2021-25"},
    {date: "25-September-2021", category: "nephew", text: "With my nephew in old fort of Delhi", img:"25sep2021-24"},
    {date: "25-September-2021", category: "nephew", text: "My nephew in old fort of Delhi", img:"25sep2021-23"},
    {date: "25-September-2021", category: "nephew", text: "My nephew in old fort of Delhi", img:"25sep2021-22"},
    {date: "25-September-2021", category: "", text: "My nephew in old fort of Delhi", img:"25sep2021-21"},
    {date: "25-September-2021", category: "", text: "My nephew in old fort of Delhi", img:"25sep2021-20"},
    {date: "25-September-2021", category: "", text: "My nephew in old fort of Delhi", img:"25sep2021-19"},
    {date: "25-September-2021", category: "nephew", text: "My nephew in old fort of Delhi", img:"25sep2021-18"},
    {date: "25-September-2021", category: "nephew", text: "My nephew in old fort of Delhi", img:"25sep2021-17"},
    {date: "25-September-2021", category: "nephew", text: "My nephew in old fort of Delhi", img:"25sep2021-16"},
    {date: "25-September-2021", category: "nephew", text: "My nephew in old fort of Delhi", img:"25sep2021-15"},
    {date: "25-September-2021", category: "", text: "My nephew in old fort of Delhi", img:"25sep2021-14"},
    {date: "25-September-2021", category: "", text: "My nephew in old fort of Delhi", img:"25sep2021-13"},
    {date: "25-September-2021", category: "nephew", text: "My nephew in old fort of Delhi", img:"25sep2021-12"},
    {date: "25-September-2021", category: "", text: "My nephew in old fort of Delhi", img:"25sep2021-11"},
    {date: "25-September-2021", category: "nephew", text: "My nephew in old fort of Delhi", img:"25sep2021-10"},
    {date: "25-September-2021", category: "", text: "My nephew in old fort of Delhi", img:"25sep2021-9"},
    {date: "25-September-2021", category: "nephew", text: "My nephew in old fort of Delhi", img:"25sep2021-8"},
    {date: "25-September-2021", category: "", text: "My nephew in old fort of Delhi", img:"25sep2021-7"},
    {date: "25-September-2021", category: "nephew", text: "My nephew in old fort of Delhi", img:"25sep2021-6"},
    {date: "25-September-2021", category: "", text: "My nephew in old fort of Delhi", img:"25sep2021-5"},
    {date: "25-September-2021", category: "", text: "My nephew in old fort of Delhi", img:"25sep2021-4"},
    {date: "25-September-2021", category: "", text: "My nephew in old fort of Delhi", img:"25sep2021-3"},
    {date: "25-September-2021", category: "", text: "My nephew in old fort of Delhi", img:"25sep2021-2"},
    {date: "25-September-2021", category: "", text: "My nephew in old fort of Delhi", img:"25sep2021-1"},
    {date: "11-July-2021", category: "politician", text: "With Member of Parliament from Budaun Mrs. Sanghamitra Maurya daughter of former cabinet minister Mr. Swami Prasad Maurya", img:"11july2021"},
    {date: "6-March-2021", category: "best", text: "In Stardom Convention, Noida", img:"6mar2021-6"},
    {date: "6-March-2021", category: "best", text: "In Stardom Convention, Noida", img:"6mar2021-5"},
    {date: "6-March-2021", category: "best", text: "In Stardom Convention, Noida", img:"6mar2021-4"},
    {date: "6-March-2021", category: "", text: "In Stardom Convention, Noida", img:"6mar2021-3"},
    {date: "6-March-2021", category: "", text: "In Stardom Convention, Noida", img:"6mar2021-2"},
    {date: "6-March-2021", category: "best", text: "In Stardom Convention, Noida", img:"6mar2021-1"},





    {date: "2-August-2021", category: "", text: "Inauguration of my mother's real younger sister's Musicka Studio in Mumbai.", img:"2aug2021-15"},
    {date: "2-August-2021", category: "", text: "Inauguration of my mother's real younger sister's Musicka Studio in Mumbai.", img:"2aug2021-14"},
    {date: "2-August-2021", category: "", text: "Inauguration of my mother's real younger sister's Musicka Studio in Mumbai.", img:"2aug2021-13"},
    {date: "2-August-2021", category: "", text: "Inauguration of my mother's real younger sister's Musicka Studio in Mumbai.", img:"2aug2021-12"},
    {date: "2-August-2021", category: "", text: "Inauguration of my mother's real younger sister's Musicka Studio in Mumbai.", img:"2aug2021-11"},
    {date: "2-August-2021", category: "", text: "Inauguration of my mother's real younger sister's Musicka Studio in Mumbai.", img:"2aug2021-10"},
    {date: "2-August-2021", category: "", text: "Inauguration of my mother's real younger sister's Musicka Studio in Mumbai.", img:"2aug2021-9"},
    {date: "2-August-2021", category: "", text: "Inauguration of my mother's real younger sister's Musicka Studio in Mumbai.", img:"2aug2021-8"},
    {date: "2-August-2021", category: "", text: "Inauguration of my mother's real younger sister's Musicka Studio in Mumbai.", img:"2aug2021-7"},
    {date: "2-August-2021", category: "", text: "Inauguration of my mother's real younger sister's Musicka Studio in Mumbai.", img:"2aug2021-6"},
    {date: "2-August-2021", category: "", text: "Inauguration of my mother's real younger sister's Musicka Studio in Mumbai.", img:"2aug2021-5"},
    {date: "2-August-2021", category: "", text: "Inauguration of my mother's real younger sister's Musicka Studio in Mumbai.", img:"2aug2021-4"},
    {date: "2-August-2021", category: "", text: "Inauguration of my mother's real younger sister's Musicka Studio in Mumbai.", img:"2aug2021-3"},
    {date: "2-August-2021", category: "", text: "Inauguration of my mother's real younger sister's Musicka Studio in Mumbai.", img:"2aug2021-2"},
    {date: "2-August-2021", category: "", text: "Inauguration of my mother's real younger sister's Musicka Studio in Mumbai.", img:"2aug2021-1"},







    {date: "27-February-2021", category: "best", text: "Near Office", img:"27feb2021"},
    {date: "21-February-2021", category: "best", text: "Near Dam", img:"21feb2021-3"},
    {date: "21-February-2021", category: "", text: "Near Dam", img:"21feb2021-2"},
    {date: "21-February-2021", category: "", text: "Near Dam", img:"21feb2021-1"},
    {date: "26-January-2021", category: "", text: "Republic day post of facebook", img:"26jan2021"},
    {date: "1-January-2021", category: "politician best", text: "With editor-in-chief of APN news channel Indrajeet Badhwar uncle", img:"1jan2021-2"},
    {date: "1-January-2021", category: "best father politician", text: "My father with editor-in-chief of APN news channel Mr Indrajeet Badhwar", img:"1jan2021-1"},

    {date: "31-December-2020", category: "", text: "My house banner", img:"31dec2020"},
    {date: "29-December-2020", category: "", text: "Post of facebook", img:"29dec2020"},
    {date: "23-November-2020", category: "best", text: "In Mall", img:"23nov2020-2"},
    {date: "23-November-2020", category: "best", text: "In Park", img:"23nov2020-1"},
    {date: "23-February-2020", category: "politician", text: "With central government minister B.L. Verma uncle", img:"23feb2020"},
    {date: "28-September-2020", category: "neice", text: "My Neice", img:"28sep2020"},
    {date: "29-September-2020", category: "father", text: "My cousin sister's marriage in Budaun", img:"29sep2020-2"},
    {date: "29-September-2020", category: "best", text: "My cousin sister's marriage in Budaun", img:"29sep2020-1"},
    {date: "30-September-2020", category: "father", text: "My cousin sister's reception in Muradabad", img:"30sep2020-2"},
    {date: "30-September-2020", category: "best", text: "My cousin sister's reception in Muradabad", img:"30sep2020-1"},
    {date: "24-October-2020", category: "neice", text: "My neice", img:"24oct2020-11"},
    {date: "24-October-2020", category: "neice", text: "My neice", img:"24oct2020-10"},
    {date: "24-October-2020", category: "neice", text: "My neice", img:"24oct2020-9"},
    {date: "24-October-2020", category: "neice", text: "My neice", img:"24oct2020-8"},
    {date: "24-October-2020", category: "neice", text: "My neice", img:"24oct2020-7"},
    {date: "24-October-2020", category: "neice", text: "My neice", img:"24oct2020-6"},
    {date: "24-October-2020", category: "neice", text: "My neice", img:"24oct2020-5"},
    {date: "24-October-2020", category: "neice", text: "My neice", img:"24oct2020-4"},
    {date: "24-October-2020", category: "nephew", text: "My nephew with his cousin", img:"24oct2020-3"},
    {date: "24-October-2020", category: "best", text: "My cousin sister's marriage in Lucknow", img:"24oct2020-2"},
    {date: "24-October-2020", category: "", text: "My cousin sister's marriage in Lucknow", img:"24oct2020-1"},
    {date: "26-October-2020", category: "best", text: "My cousin sister's reception in Budaun", img:"26oct2020"},
    {date: "29-December-2020", category: "politician", text: "With Mr. Harvansh Yadav (Block Chief Ujhani)", img:"29dec2020-2"},
    {date: "29-December-2020", category: "father", text: "My father", img:"29dec2020-1"},
    {date: "30-December-2020", category: "", text: "Attended marriage in Budaun", img:"30dec2020-4"},
    {date: "30-December-2020", category: "politician", text: "With Mr. Manoj Masih (Member of National BJP Minority Morcha)", img:"30dec2020-3"},
    {date: "30-December-2020", category: "politician", text: "With Mr. Twinkle brother", img:"30dec2020-2"},
    {date: "30-December-2020", category: "politician", text: "In Ujhani", img:"30dec2020-1"},

    {date: "June-2020", category: "", text: "My Neice in Lucknow", img:"jun2020-5"},
    {date: "June-2020", category: "", text: "My Neice in Lucknow", img:"jun2020-4"},
    {date: "June-2020", category: "", text: "My Neice in Lucknow", img:"jun2020-3"},
    {date: "June-2020", category: "", text: "My Neice in Lucknow", img:"jun2020-2"},
    {date: "June-2020", category: "", text: "My Neice in Lucknow", img:"jun2020-1"},

    {date: "23-February-2020", category: "", text: "My cousin sister's marriage in Ujhani", img:"23feb2020-3"},
    {date: "23-February-2020", category: "", text: "My cousin sister's marriage in Ujhani", img:"23feb2020-2"},
    {date: "23-February-2020", category: "", text: "My cousin sister's marriage in Ujhani", img:"23feb2020-1"},

    {date: "31-January-2020", category: "", text: "My Neice in Ghaziabad", img:"31jan2020-3"},
    {date: "31-January-2020", category: "", text: "My Neice in Ghaziabad", img:"31jan2020-2"},
    {date: "31-January-2020", category: "", text: "My Neice in Ghaziabad", img:"31jan2020-1"},

    {date: "21-November-2019", category: "father", text: "Attended my best friend's marriage in Budaun", img:"21nov2019-3"},
    {date: "21-November-2019", category: "politician", text: "With central government minister B.L. Verma uncle on the ocassion of his son's marriage", img:"21nov2019-2"},
    {date: "21-November-2019", category: "politician", text: "With best friend Mr. Prabhat Rajpoot Verma (Son of Mr. B.L. Verma central government minister)", img:"21nov2019-1"},
    {date: "6-June-2019", category: "", text: "In Hotel", img:"6jun2019"},
    {date: "29-June-2019", category: "father", text: "My cousin sister's engagement in Ujhani", img:"29jun2019-2"},
    {date: "29-June-2019", category: "", text: "My cousin sister's engagement in Ujhani", img:"29jun2019-1"},
    {date: "19-July-2019", category: "best", text: "In Mall", img:"19jul2019"},
    {date: "10-August-2019", category: "", text: "In Park", img:"10aug2019-4"},
    {date: "10-August-2019", category: "best", text: "In Park", img:"10aug2019-3"},
    {date: "10-August-2019", category: "best", text: "In Park", img:"10aug2019-2"},
    {date: "10-August-2019", category: "best", text: "In Park", img:"10aug2019-1"},
    {date: "14-August-2019", category: "best", text: "In Park", img:"14aug2019"},
    {date: "14-September-2019", category: "best", text: "Office Time", img:"14sep2019-1"},
    {date: "30-November-2019", category: "cricket", text: "In cricket ground of Greater Noida", img:"30nov2019-2"},
    {date: "30-November-2019", category: "cricket", text: "In cricket ground of Greater Noida", img:"30nov2019-1"},

    {date: "4-February-2018", category: "", text: "In the office", img:"4feb2018-3"},
    {date: "4-February-2018", category: "best", text: "In the office", img:"4feb2018-2"},
    {date: "4-February-2018", category: "best", text: "In the office", img:"4feb2018-1"},
    {date: "1-August-2018", category: "best", text: "Attended orientation program in Starex University, Gurugram", img:"1aug2018-2"},
    {date: "1-August-2018", category: "best", text: "Attended orientation program in Starex University, Gurugram", img:"1aug2018-1"},
    {date: "5-October-2018", category: "best", text: "In the office", img:"5oct2018"},
    {date: "March-2018", category: "best", text: "Holi Post of facebook", img:"march2018"},
    {date: "1-January-2018", category: "best", text: "Post of facebook", img:"1jan2018"},

    {date: "January-2017", category: "", text: "In Ujhani", img:"jan2017-2"},
    {date: "January-2017", category: "best politician", text: "With Mr. Nilanshu Aggarwal (son of former minister of status Vimal Krishna Aggarwal uncle)", img:"jan2017-1"},
    {date: "10-February-2017", category: "best", text: "My sister's engagement", img:"10feb2017"},
    {date: "February-2017", category: "politician", text: "Tilak Badhwar uncle", img:"feb2017-6"},
    {date: "February-2017", category: "politician", text: "Former minister of status Mr. Vimal Krishna Aggarwal", img:"feb2017-5"},
    {date: "February-2017", category: "politician father", text: "Former cabinet minister Mrs. Pramila Badhwar Mehra", img:"feb2017-4"},
    {date: "February-2017", category: "politician father", text: "Former minister of status Mr. Vimal Krishna Aggarwal", img:"feb2017-3"},
    {date: "February-2017", category: "politician father", text: "Former cabinet minister Mrs. Pramila Badhwar Mehra", img:"feb2017-2"},
    {date: "February-2017", category: "politician", text: "Former cabinet minister Mrs. Pramila Badhwar Mehra", img:"feb2017-1"},
    {date: "2017", category: "festival", text: "Republic Day Post of facebook", img:"2017-7"},
    {date: "2017", category: "festival", text: "Diwali Post of facebook", img:"2017-6"},
    {date: "2017", category: "festival", text: "Independence Day Post of facebook", img:"2017-5"},
    {date: "2017", category: "festival", text: "Raksha Bandhan Post of facebook", img:"2017-4"},
    {date: "2017", category: "festival", text: "Eid-Ul-Zuha Post of facebook", img:"2017-3"},
    {date: "2017", category: "festival", text: "Eid-Ul-Fitr Post of facebook", img:"2017-2"},
    {date: "2017", category: "festival", text: "Holi Post of facebook", img:"2017-1"},
    {date: "19-December-2017", category: "best", text: "In the office", img:"19dec2017"},

    {date: "2016", category: "", text: "My Neice", img:"2016"},
    {date: "14-February-2016", category: "best", text: "Jantar Mantar of Jaipur", img:"14feb2016-2"},
    {date: "14-February-2016", category: "", text: "Jantar Mantar of Jaipur", img:"14feb2016-1"},
    {date: "13-February-2016", category: "best", text: "Amer fort of Jaipur", img:"13feb2016-4"},
    {date: "13-February-2016", category: "", text: "Amer fort of Jaipur", img:"13feb2016-3"},
    {date: "13-February-2016", category: "best", text: "Amer fort of Jaipur", img:"13feb2016-2"},
    {date: "13-February-2016", category: "best", text: "Amer fort of Jaipur", img:"13feb2016-1"},


    {date: "March 2016", category: "", text: "Runner Up of Sony Sab Channel Antakshari", img:"mar2016-1"},

    {date: "August-2015", category: "", text: "In Ujhani", img:"aug2015-6"},
    {date: "August-2015", category: "", text: "In Ujhani", img:"aug2015-5"},
    {date: "August-2015", category: "best", text: "In Ujhani", img:"aug2015-4"},
    {date: "August-2015", category: "", text: "In Ujhani", img:"aug2015-3"},
    {date: "August-2015", category: "", text: "In Ujhani", img:"aug2015-2"},
    {date: "August-2015", category: "best", text: "In Ujhani", img:"aug2015-1"},

    {date: "2013", category: "best", text: "In army colony of Lucknow", img:"2013"},
    {date: "2010", category: "cricket", text: "In cricket ground of Ujhani", img:"2010"},
    {date: "2005", category: "", text: "My mother's real younger siter is with Padmavibhushan Ustad Ghulam Mustafa Khan Sahab", img:"2005"},
    {date: "1997", category: "old", text: "My mother's real younger sister is with Mr. Vinod Khanna in Annu Malik show", img:"1997-6"},
    {date: "1997", category: "old", text: "My mother's real younger sister in USA", img:"1997-5"},
    {date: "1997", category: "old", text: "My mother's real younger sister in USA", img:"1997-4"},
    {date: "1997", category: "old", text: "My mother's real younger sister in USA", img:"1997-3"},
    {date: "1997", category: "old", text: "My mother's real younger sister in USA", img:"1997-2"},
    {date: "1997", category: "childhood best", text: "In Bareilly", img:"1997-1"},
    {date: "1996", category: "best", text: "My mother's real younger sister with singer Udit Narayan", img:"1996-2"},
    {date: "1996", category: "childhood best", text: "In Bareilly", img:"1996"},
    {date: "1995", category: "childhood best", text: "With maternal grandfather in Bareilly", img:"1995-2"},
    {date: "1995", category: "childhood best", text: "In Bareilly", img:"1995-1"},
    {date: "1994", category: "childhood best", text: "With my mother", img:"1994-2"},
    {date: "1994", category: "childhood best", text: "With my mother", img:"1994-1"},
    
    {date: "1985", category: "father old", text: "My father in Shillong", img:"1985"},
    {date: "1970", category: "old", text: "My maternal grandfather Late. Mr. Abdul Laique", img:"nana"},
    {date: "1965", category: "old", text: "My paternal grandfather Late. Mr. Qamaruddin", img:"dada"},
    {date: "1955", category: "old", text: "My grandfather attended farewell of Mr. P.L. Badhwar", img:"1958"},
    {date: "1950", category: "old cricket", text: "My grandfater (as a Wicket Keeper)", img:"dada1"},
    {date: "1935", category: "old", text: "This book has printed from Amritsar Punjab in 1935. My great grandfather's name is in this book for the love of his community & justice", img:"1935"}
];
tags.forEach(function(e) {
    content += "<div class='project-item " + e.category + "'><div class='cnt'><span class='date'>" + e.date + "</span><img class='lazy' data-src='images/image-gallery/" + e.img + ".jpg'" + " /><p>" + e.text + "</p></div></div>";
});
document.querySelector(".projects-list").innerHTML = content;




function lazyloadimage(){
    var window_height = $(window).height();
    var scroll = $(window).scrollTop();
    var window_bottom = window_height + scroll;
    
    $(".projects-list .project-item img").each(function(){
        var animate_height = $(this).height();
        var animate_top = $(this).offset().top;
        var animate_bottom = animate_height + animate_top;
    
        if(animate_top <= window_bottom && animate_bottom >= scroll){
            // for img tag
            var srcValue = $(this).attr("data-src");
            //console.log(srcValue);
            $(this).attr("src", srcValue);
            $(this).removeAttr("data-src");

            // for style
            var styleValue = $(this).attr("data-style");
            //console.log(styleValue);
            $(this).attr("style", styleValue);
            $(this).removeAttr("data-style");
        }
    });
}
$(window).on("load scroll resize", lazyloadimage);
setInterval(lazyloadimage(), 100);