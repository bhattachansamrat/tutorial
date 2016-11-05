using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Tutorial.Startup))]
namespace Tutorial
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
