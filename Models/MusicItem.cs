using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace music_player.Models
{
    public class MusicItem
    {
        [Key]
        [DatabaseGenerated(System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption.Identity)]
        public int SongId { get; set; }
        
        public string SongName { get; set; }
        public string Singer { get; set; }
    }

   

}

   