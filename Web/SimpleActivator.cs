using Common.Interfaces;
using System;
using System.Linq;
using System.Reflection;
using Web.Services;

public class SimpleActivator : IServiceProvider
{
    public object GetService(Type serviceType)
    {
        var ctors = serviceType.GetConstructors();
        ConstructorInfo targetCtor = null;
        foreach (var c in ctors)
        {
            var parameters = c.GetParameters();
            if (parameters.Count() == 1 && parameters[0].ParameterType == typeof(IScoreManager))
            {
                targetCtor = c;
                break;
            }
        }

        if (targetCtor != null)
        {
            return targetCtor.Invoke(new object[] { new ScoreManager() });
        }
        else
        {
            return Activator.CreateInstance(
            serviceType,
            BindingFlags.Instance | BindingFlags.NonPublic | BindingFlags.Public | BindingFlags.CreateInstance,
            null,
            null,
            null);
        }
    }
}