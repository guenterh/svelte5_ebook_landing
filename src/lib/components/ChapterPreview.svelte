<script>


	const chapters = [
		{
			number: 1,
			title: "Navigating the Spanish Bureaucracy",
			strapline: "Understanding Visas, residency and Legal Essentials",
			excerpt:
				"Moving to Spain involves navigating a labyrinth ...."
		},
		{
			number: 2,
			title: "Titel 2",
			strapline: "Strapline 2",
			excerpt:
				"Excerpt 2 ...."
		},
		{
			number: 3,
			title: "Titel 3",
			strapline: "Strapline 3",
			excerpt:
				"Excerpt 3 ...."
		},
		{
			number: 4,
			title: "Titel 4",
			strapline: "Strapline 4",
			excerpt:
				"Excerpt 4 ...."
		},
		{
			number: 5,
			title: "Titel 5",
			strapline: "Strapline 5",
			excerpt:
				"Excerpt 5 ...."
		}

	]

	let selectedChapterNumber = $state(1)
	let selectedChapter = $derived(chapters.find((chapter) => chapter.number === selectedChapterNumber))

	function selectChapter(chapter) {

		selectedChapterNumber = chapter.number
	}

</script>


<section class="landing-page-section">
	<h2 class="mb-l">What you are getting</h2>
	<div class="chapter-container">
		<ul>
			<!-- {#each chapters as chapter} -->
			{#each chapters as chapter,index}
				<li>
					<!-- aria-controls={`chapter-info-${chapter.number}`} -->
					<button  class="chapter-title"
									class:selected-chapter-title={selectedChapterNumber ===
									chapter.number}
									aria-controls={`chapter-info-${index + 1}`}
									aria-expanded={selectedChapterNumber === chapter.number}
									onclick={() => selectChapter(chapter)	}>
						<h4>Chapter {chapter.number}: {chapter.title}</h4>
					</button>
				</li>

			{/each}
		</ul>
		<div class="chapter-info">
			<h3 class="chapter-strapline italic mb-s">
				<!--{chapters.find((chapter) => chapter.number === selectedChapterNumber).title}-->
				{selectedChapter.title}
			</h3>
			<p>
				{selectedChapter.excerpt}
			</p>
		</div>
	</div>
</section>


<style>
		/*
  .chapter-preview {
    padding: 80px;
    margin-left: 12vw;
    margin-right: 20vw;
    max-width: 1150px;
  }

		 */
  .chapter-container {
    display: flex;
    justify-content: space-between;
  }

  .chapter-container ul {
    width: 40%;
  }

  .chapter-info {
    width: 55%;
  }

  .chapter-title {
    border-bottom: 1px solid grey;
    width: 100%;
    display: block;
    padding: 12px;
    text-align: left;
  }

  .selected-chapter-title {
    background-color: black;
    border: none;
    color: white;
    box-shadow:
      0 4px 6px rgba(0, 0, 0, 0.1),
      0 1px 3px rgba(0, 0, 0, 0.08);
  }
</style>
