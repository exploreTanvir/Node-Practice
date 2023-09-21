module.exports = name => {
if(!name) throw Error('Name Not Found')
var title = name.replace(/\.(avi|mkv|mpeg|mpg|mov|mp4|m4v)/i, '').match(/(.*?)(directors(.?)cut|480p|720p|1080p|dvdrip|xvid|cd[0-9]|bluray|dvdscr|brrip|divx|S[0-9]{1,3}E[0-9]{1,3}|Season[\s,0-9]{1,4}|[\{\(\[]?[0-9]{4}).*/i)
if(title[1]) return title[1].replace(/\./g, ' ').trim().substring(title.indexOf('-') + 1)
}