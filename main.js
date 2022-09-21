let window_width = document.documentElement.clientWidth
let window_height = document.documentElement.clientHeight

let out_link = document.getElementsByClassName('out-link');
const out_link_array = Array.prototype.slice.call(out_link);

let headline = document.getElementsByClassName("headline")[0];
headline.addEventListener('mouseenter', () => {
    headline.style.backgroundColor = "#C0C0C0";
}, false); 
headline.addEventListener('mouseleave', () => {
    headline.style.backgroundColor = "#FFFFFF";
}, false);

// (window.onload = function() {
//     out_link_array.forEach(function(item) {
//         item.style.opacity =  1;
//     });
// })();
out_link_array.forEach(function(item) {
    item.style.opacity =  1;
});

sns_names = ["twitter", "github"];
sns_colors = ["#00ACED", "#000000"]
for (let i = 0; i < sns_names.length; i++) {
    let sns = document.getElementById(sns_names[i]);
    sns.addEventListener('mouseenter', () => {
        //sns.style.opacity = 0.6;
        sns.style.backgroundColor = sns_colors[i];
    }, false); 
    sns.addEventListener('mouseleave', () => {
        sns.style.backgroundColor = "#808080";
    }, false);
}


// let sub_title = document.getElementsByClassName('sub-title');
// const sub_title_array = Array.prototype.slice.call(sub_title);
// sub_title_array.forEach(function(item) {
//     item.addEventListener('mouseenter', () => {
//         item.style.color = "#909090";
//     }, false); 
//     item.addEventListener('mouseleave', () => {
//         item.style.color = "#000000";
//     }, false);
// });

