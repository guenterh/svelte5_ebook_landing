<script>
	 import authorPic from "$assets/profile_pic.jpg"
</script>

<section class="landing-page-section">
	<h2 class="mb-l">About the Author</h2>
	<div class="author-container">
	<div class="author-text">
		<p>
			bla bla bla
		</p>
		<p>
			blu blu blu
		</p>
	</div>
		<img src="{authorPic}" alt="Author Niklas Fischer">
	</div>
</section>


<style>
	/*
  .author-section {
    padding: 80px 0;
    margin-left: 12vw;
    margin-right: 20vw;
    max-width: 1150px;
  }

	 */
  .author-container {
    display: flex;
    justify-content: space-between;
  }

  .author-container img {
    width: 40%;
    border: 6px solid black;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
  }

  .author-text {
    width: 55%;
  }

  /* .author-text p:not(:last-of-type) {
    margin-bottom: 8px;
  } */
</style>
