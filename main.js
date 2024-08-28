// countries = the object data
// API https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}
let country = document.querySelector('.language-select-1')
let country_2 = document.querySelector('.language-select-2')
let btn = document.querySelector('.translate-button')
let objectValues = Object.entries(countries)
let inputValue = document.querySelector('.text-input')
let outputValue = document.querySelector('.text-output')

// console.log(inputValue)
objectValues.forEach(([key, values]) => {
	// console.log( values)
	let theOption = document.createElement('option')
	theOption.textContent = values
	theOption.value = key
	country.appendChild(theOption)

	let theOption2 = document.createElement('option')
	theOption2.textContent = values
	theOption2.value = key
	country_2.appendChild(theOption2)
})
// function get value and pass to API to trnslate
// get selected value from options
// compare it with key in objects
// pass it to api then get the value that translated
// the error handel with  no text and the same language
btn.addEventListener('click', () => {
	let langFrom = country.value
	let langTo = country_2.value
	let text = inputValue.value
	console.log(typeof langFrom, langTo)
	if (!text) {
		return (outputValue.textContent = `please Enter the sentences only to translate `)
	} else if (langFrom == langTo) {
		return (outputValue.textContent = `please select other language can't  yrsndlste the same language `)
	} else {
		const theURL = `https://api.mymemory.translated.net/get?q=${text}&langpair=${langFrom}|${langTo}`
		fetch(theURL)
			.then((res) => res.json())
			.then((data) => {
				let theTranslatedWord =
					data.responseData.translatedText
				outputValue.textContent = theTranslatedWord
			})
			.catch((e) => {
				console.log(e.message)
				outputValue.textContent = `Error in Fetch or type Error `
			})
	}
})
