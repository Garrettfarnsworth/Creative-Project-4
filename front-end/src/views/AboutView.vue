<template>
<div>
<div>
	<main class="aboutView">
		<h1>What is this website all about?</h1>
		<p>Its really simple, <strong>sloths!</strong> For a long time I have come to fall in love with these amazing creatures and have even had the opportunity to see one in real life! This website is dedicated to all things sloths from fun facts about them to my persoanl encountres and photos with sloths. So, if you love sloths and want to learn more about them, stay tuned for more information on the website!</p>
		<h2>A list of whats to come!</h2>
		<ul>
			<li>Sloth facts</li>
			<li>A sloth survey, find out what kind of sloth you are!</li>
			<li>General info about sloths!</li>
			<li>A contact us page</li>
		</ul>
	</main>
	<div class="cards">
		<div class="card">
			<a href="#">
				<div class="image-wrapper-card"> <img src="/images/BoyAndSloth400px.jpg" alt="Young boy holding a sloth"> </div>
				<div class="card-overlay">
					<div>
						<h3>Sloths and Humans</h3>
						<p>How are sloths and humans living together in tandem?</p>
					</div>
				</div>
			</a>
		</div>
		<div class="card">
			<a href="#">
				<div class="image-wrapper-card"> <img src="/images/VineSloth400px.jpg" alt="A sloth climbing vines"> </div>
				<div class="card-overlay">
					<div>
						<h3>Fan Art</h3>
						<p>Sloths inspire creation. Especially if its about them.</p>
					</div>
				</div>
			</a>
		</div>
		<div class="card">
			<a href="#">
				<div class="image-wrapper-card"> <img src="/images/SlothClimber400px.jpg" alt="A sloth climbing a tree trunk"> </div>
				<div class="card-overlay">
					<div>
						<h3>Goal Oriented</h3>
						<p>Despite being slow, sloths aim to actually accomplish their goals.</p>
					</div>
				</div>
			</a>
		</div>
		<div class="card">
			<a href="#">
				<div class="image-wrapper-card"> <img src="/images/SlothReaching400px.jpg" alt="A sloth hanging with its claw out"> </div>
				<div class="card-overlay">
					<div>
						<h3>Lifestyle</h3>
						<p>What can someone really learn from a sloth? A lot more than you think.</p>
					</div>
				</div>
			</a>
		</div>
	</div>
</div>
<h2>Here is some information about sloths kept in zoos around the United States!</h2>
<p>Each of these sloths below has a unique personality trait that we use to describe with a buzzword. You can also learn the name 
  the zoo has given them, gender, common animal name, common Scientific name, and the state in which they reside!
</p>
  <SlothList :sloths="sloths" />
</div>
</template>

<script>
import SlothList from "../components/SlothList.vue"
export default {
  name: 'about-page',
  components: {
    SlothList
  },
  data() {
    return {
    }
  },
  computed: {
    sloths() {
      return this.$root.$data.sloths;
    }
  },
}
</script>

<style scoped>
  main {
    align-self: center;
    margin: 0 1rem;
  }
</style>