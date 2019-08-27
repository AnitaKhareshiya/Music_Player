using Microsoft.EntityFrameworkCore;
namespace music_player.Models
{

    //  public ContactAppContext(DbContextOptions < ContactAppContext > options): base(options) {}  
    // public DbSet < Contact > Contact {  
    public class MusicContext : DbContext
    {
  public MusicContext(DbContextOptions options)
            : base(options)
        {
        }

        public DbSet<MusicItem> MusicItem { get; set; }
        public DbSet<Playlist> Playlist { get; set; }
      
        
    }
}