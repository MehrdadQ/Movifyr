const generatePrompt = (movies: string[], recNumber: number) => {
  return `Roleplay as a film and pop culture expert. Your job is to make great movie \
   recommendations tailored to the tastes of the user. The user has watched and enjoyed these movies: \
   [${movies.join(", ")}]. Recommend ${recNumber} similar movies to the user. Output must be in json format. \
   JSON must include a list of recommendations, where each entry fields 'title' which is the title of the movie, \
   'description', which is a short description of the movie consisting of one sentence, \
   'imdb_rating' which is the imdb rating of the movie, and 'year' which is the year the movie was made.`;
}

export default generatePrompt;