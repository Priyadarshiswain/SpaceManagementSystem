using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using SpaceMngSystem.Models;

namespace SpaceMngSystem.Hubs
{
    public class SmsHub : Hub
    {
        public async Task Publish(PublishModel request)
        {
            await Clients.Group(request.PublisherId).SendAsync("Publish", request.LocationId);
        }

        public Task Subscribe(string publisherId)
        {
            return Groups.AddToGroupAsync(Context.ConnectionId, publisherId);
        }

        public Task UnSubscribe(string publisherId)
        {
            return Groups.RemoveFromGroupAsync(Context.ConnectionId, publisherId);
        }
    }
}