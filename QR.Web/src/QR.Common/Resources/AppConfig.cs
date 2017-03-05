﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace QR.Common.Resources
{
    public sealed class AppConfig
    {
        private static readonly Lazy<AppConfig> lazy = new Lazy<AppConfig>(() => new AppConfig());
        public static AppConfig Instance { get { return lazy.Value; } }

        private AppConfig()
        {           
        }

        public static AppConfig InitializeConfigurations(IConfigurationRoot config)
        {
            Instance.DocDbEndpointUri = config["DocumentDb:EndpointUri"];
            Instance.DocDbPrimaryKey = config["DocumentDb:PrimaryKey"];
            Instance.DocDbDatabaseName = config["DocumentDb:DatabaseName"];
            Instance.DocDbCollectionName = config["DocumentDb:CollectionName"];

            return Instance;
        }

        public string DocDbEndpointUri { get; set; }
        public string DocDbPrimaryKey { get; set; }
        public string DocDbDatabaseName { get; set; }
        public string DocDbCollectionName { get; set; }
    }
}
