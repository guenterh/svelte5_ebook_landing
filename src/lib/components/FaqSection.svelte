<script>
	import { Button, FaqItem } from '$components';
	import twitterIcon from '$assets/icons/twitter.webp'

	const faqs = [
		{
			question: 'What will I learn from this ebook',
			answer: 'This ebook provides a comprehensive guide ....' +
				'This ebook provides a comprehensive guide ....' +
				'This ebook provides a comprehensive guide ....' +
				'This ebook provides a comprehensive guide ....' +
				'This ebook provides a comprehensive guide ....' +
				'This ebook provides a comprehensive guide ....'
		},
		{
			question: 'Who is this e book for',
			answer: 'This is perfect for everone ....'
		},
		{
			question: 'How much does this ebook cost',
			answer: 'The book is priced by $10 ....'
		},
		{
			question: 'Is the information up to date?',
			answer: 'Yes of course ....'
		},
		{
			question: 'can I get refund?',
			answer: 'Absolutely ....'
		}


	]

	let questionCurrentlyExpanded = $state(-1)
	function onclick(index) {
		if (questionCurrentlyExpanded === index) {
			questionCurrentlyExpanded = -1
		} else {
			questionCurrentlyExpanded = index
		}
	}

</script>

<section class="landing-page-section">
	<h2 class="mb-l">Frequently asked questions</h2>
	<div class="faq-container">
		{#each faqs as faq, index}
			 <!--<FaqItem faq={faq}/> -->
			<FaqItem {faq} isExpanded={index === 	questionCurrentlyExpanded}
			onclick={() => onclick(index)}
			/>
			{/each}

	</div>
	<div class="additional-info">
		<Button class="mt-s">BUY Now</Button>
		<p class="mt-m">Any other questions?</p>
		<a target="_blank" href="https://openbiblio.social/@vog61">
			<p>Hit me u on Mastodon <img src={twitterIcon} class="twitter-icon" alt=""> </p>
		</a>
	</div>
</section>

<style>
  .additional-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: grey;
  }

  .twitter-icon {
    width: 16px;
    height: 16px;
  }

  .additional-info a {
    text-decoration: underline;
  }
</style>
