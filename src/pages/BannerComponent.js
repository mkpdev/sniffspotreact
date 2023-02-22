export const BannerComponent = (props) => {
return (
<div className="main-class main-banner-class">

<div className="container-banner-class">

    <div className="web-location-class">
<ol vocab="https://schema.org/" typeof="BreadcrumbList">
<li property="itemListElement" typeof="ListItem"><a property="item" typeof="WebPage" id="/" href="/"><span property="name" class="web-location-text-class link">Home</span></a></li>
<p className="web-location-text-class" style={{marginLeft:5,marginRight:5,marginTop:15}}>{'>'}</p>
<li property="itemListElement" typeof="ListItem"><a property="item" typeof="WebPage" id="/" href="/"><span property="name" class="web-location-text-class link">All dog parks</span></a></li>
<p className="web-location-text-class" style={{marginLeft:5,marginRight:5,marginTop:15}}>{'>'}</p>
<li property="itemListElement" typeof="ListItem"><a property="item" typeof="WebPage" id="/" href="/"><span property="name" class="web-location-text-class link">Washington</span></a></li>
<p className="web-location-text-class" style={{marginLeft:5,marginRight:5,marginTop:15}}>{'>'}</p>
<li property="itemListElement" typeof="ListItem"><a property="item" typeof="WebPage" id="/" href="/"><span property="name" class="web-location-text-class link">Seattle</span></a></li>
</ol>
</div>

<div className="main-class" >

<h1 class="banner-title">{'Rent safe and private dog parks hosted by locals in \n Seattle , Washington'}</h1>

<p class="banner-subtitle">Sniffspot's private dog parks are the best way to exercise your dog. We have the best variety and the best priced dog parks anywhere!</p>

<div className="explore-button-container">

    <a className="explore-a-tag"><button class="explore-button-class">Explore spots in Seattle , WA</button></a>

</div>

</div>



</div>

</div>
);
}