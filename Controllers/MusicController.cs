using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using music_player.Models;



namespace music_player.Controllers
{
        [Route("api/[controller]")]
        [ApiController]
    public class MusicController : Controller
    {
        private MusicContext _musicContext;

        public MusicController(MusicContext context)
        {
            _musicContext = context;
        }


    
  [HttpGet]
   [Route("MusicItems")] 
        public List <MusicItem> Get()
        {
            return _musicContext.MusicItem.ToList();
            
        }

        //Get of playlist

          [HttpGet]
         [Route("playlistItems")] 
        public List <Playlist> GetPlaylist()
        {
            return _musicContext.Playlist.ToList();
            
        }


 //POST api/values
        [HttpPost]
        [Route("showPlaylist")] 
         public IActionResult Create([FromBody] Playlist song)
    {
        if (song == null) {  
                return BadRequest();  
            }  
            _musicContext.Playlist.Add(new Playlist {  
                    SongId = song.SongId,  
                    SongName = song.SongName,  
                    Singer = song.Singer  
                     
            });  
            _musicContext.SaveChanges();  
            return Ok(new {  
                message = "Song added successfully."  
            });  
   
    }




        ~MusicController()
        {
            _musicContext.Dispose();
        }
    }
}