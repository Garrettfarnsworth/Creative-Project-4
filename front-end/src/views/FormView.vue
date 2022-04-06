<template>
	<main>
		<section>
			<div class="form-flex"> <img src="images/SlothIcon.svg" class="svgicon" alt="A sloth icon">
				<div>
					<h4>Survey</h4>
					<form action="">
						<label for="name">Your full name:</label>
						<input type="text" name="name" id="name">
						<label for="email">Your email:</label>
						<input type="email" name="email" id="email" required>
						<label for="phone">Your phone number:</label>
						<input type="tel" name="phone" id="phone">
						<label for="birthdate">Your Birthdate:</label>
						<input type="date" name="birthdate" id="birthdate">
						<p class="question">Which of the following would you guess are correct facts about sloths? (Check all that may apply)</p>
						<input type="checkbox" id="swimmer" name="facts" value="swimmer">
						<label for="swimmer">Sloths are great swimmers</label>
						<input type="checkbox" id="hibiscus" name="facts" value="hibiscus">
						<label for="hibiscus">Sloths love hibiscus leafs and are essentially choclate to them</label>
						<input type="checkbox" id="fall" name="facts" value="true">
						<label for="fall">Sloths often accidently will mistake their own arms for a tree branch and fall</label>
						<input type="checkbox" id="nature-calls" name="facts" value="bathroom">
						<label for="nature-calls">Sloths only use the restroom once every week</label>
						<input type="checkbox" id="danger" name="facts" value="danger">
						<label for="danger">Using the restroom is very dangerous for sloths</label>
						<p class="question">What do you think sloths feel like?</p>
						<input type="radio" name="feel" id="fluffy" value="fluffy">
						<label for="fluffy">Like a fluffy cloud</label>
						<input type="radio" name="feel" id="rough" value="rough">
						<label for="rough">Like an old rough haircomb</label>
						<input type="radio" name="feel" id="sticky" value="sticky">
						<label for="sticky">Sticky and kind of gross</label>
						<input type="radio" name="feel" id="heaven" value="heaven">
						<label for="heaven">Like heaven</label>
						<label for="haiku">Compose a haiku about Sloths:</label>
						<textarea name="haiku" id="haiku" cols="30" rows="5" placeholder="5/7/5 syllable count"></textarea>
						<input type="submit" value="Submit"> </form>
				</div>
			</div>
		</section>
	</main>
</template>