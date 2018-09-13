// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  this.collections = collection;
  this.itemsPages = collection.chunk(itemsPerPage)
}
Array.prototype.chunk = function (n) {
    if ( !this.length ) {
        return [];
    }
    return [ this.slice( 0, n ) ].concat( this.slice(n).chunk(n) );
};
// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  //console.log(this.collections)
  return this.collections.length;
  
  
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
 //  console.log(this.itemsPages)
 return this.itemsPages.length;
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    
    
   
     if (this.itemsPages[pageIndex] !== void 0 ) { 
        //console.log(this.itemsPages[pageIndex])
        return this.itemsPages[pageIndex].length;
}else{
   return -1;
}
   
    

  return -1;
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
 
  if(this.collections.indexOf(itemIndex) == -1)
     return -1;
  
  var index = this.collections.indexOf(itemIndex)
  var page = this.collections.length/this.itemsPages.length;
  var counter = -1;
  for(var i = 0; i< this.collections.length; i = i+page){
    if(i<=index){
       console.log(i +"____"+index+"%%%"+page)
      counter++;
      
    }
    else{
      break;
    }
  }
   console.log(this.itemsPages)
  return counter;
  
}

var helper = new PaginationHelper([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24], 8);


console.log(helper.pageIndex(16))
console.log(helper.pageItemCount(8))
console.log(helper.itemCount())
console.log(helper.pageCount())
 





