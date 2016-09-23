import ServerResource from './server-resource'

class User(data) {
  // attach computed properties for convenience
  this.updateAllOffset(data.offset);

  if (data.hasOwnProperty('listing') || data.hasOwnProperty('mediaItem')) {
    var item = data.listing || data.mediaItem;

    if (item) {
      // attach 'offset' property of bookmark to media item
      // it uses to build 'progress' on UI, e.g. [*****---] :)
      item.offset = this.offsetInMilliseconds;
      data.recentlyWatched  = data.completed == true;
      data.continueWatching = data.watched && data.completed != true;
    }

    if (data.listing) {
      data.listing = new orion.oesp.res.Listing(item, session);
      delete data.mediaItem;
    } else if (data.mediaItem){
      data.mediaItem = new orion.oesp.res.MediaItem(item, session);
    }
  }

  ServerResource.call(this, data);
}

utils.inherits(Bookmark, ServerResource);
      
export default User